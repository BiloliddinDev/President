import { NextResponse } from 'next/server';
import AmoCRMService from '@/lib/amocrm';

// Kiruvchi ma'lumot tipi
interface RequestData {
    name?: string;
    phone?: string;
}

// AmoCRM dan keladigan kontakt va lead ma'lumotlari tipi
interface AmoCRMContactResponse {
    _embedded: {
        contacts: {
            id: number;
            name: string;
            [key: string]: unknown;
        }[];
    };
}

interface AmoCRMLeadResponse {
    _embedded: {
        leads: {
            id: number;
            name: string;
            [key: string]: unknown;
        }[];
    };
}

export async function POST(request: Request) {
    try {
        // 1. JSON'dan kerakli ma'lumotlarni ajratib olish
        const { name, phone }: RequestData = await request.json();
        console.log('✅ Received form data:', { name, phone });

        // 2. Minimal validatsiya
        if (!name || !phone) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Ism va telefon raqami to'ldirilishi shart!",
                },
                { status: 400 }
            );
        }

        // 3. Kontaktni tayyorlash
        const contactData = {
            name,
            custom_fields_values: [
                {
                    field_code: 'PHONE',
                    values: [{ value: phone }],
                },
            ],
        };

        // 4. Kontaktni yaratish
        const contactResponse: AmoCRMContactResponse = await AmoCRMService.createContact(contactData);
        const contact = contactResponse._embedded.contacts[0];

        if (!contact?.id) {
            throw new Error('Kontakt ID olinmadi');
        }

        // 5. Leadni tayyorlash
        const leadData = {
            name: `Yangi murojaat: ${name}`,
            contacts: [
                {
                    id: contact.id,
                    is_main: true,
                },
            ],
        };

        // 6. Lead yaratish
        const leadResponse: AmoCRMLeadResponse = await AmoCRMService.createLead(leadData);
        const lead = leadResponse._embedded.leads[0];

        // 7. Javob qaytarish
        return NextResponse.json({
            success: true,
            message: "Ma'lumot AmoCRM ga yuborildi!",
            data: {
                contact,
                lead,
            },
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Noma\'lum xatolik';
        console.error('❌ Xatolik yuz berdi:', error);

        return NextResponse.json(
            {
                success: false,
                message: 'Xatolik yuz berdi: ' + message,
                error: message,
            },
            { status: 500 }
        );
    }
}
