import { NextResponse } from 'next/server';
import AmoCRMService from '@/lib/amocrm';

interface RequestData {
    name?: string;
    phone?: string;
}

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
        const { name, phone }: RequestData = await request.json();
        console.log('✅ Received form data:', { name, phone });

        if (!name || !phone) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Ism va telefon raqami to'ldirilishi shart!",
                },
                { status: 400 }
            );
        }

        const contactData = {
            name,
            custom_fields_values: [
                {
                    field_code: 'PHONE',
                    values: [{ value: phone }],
                },
            ],
        };

        const contactResponse: AmoCRMContactResponse = await AmoCRMService.createContact(contactData);
        const contact = contactResponse._embedded.contacts[0];

        if (!contact?.id) {
            throw new Error('Kontakt ID olinmadi');
        }

        const leadData = {
            name: `Yangi murojaat: ${name}`,
            contacts: [
                {
                    id: contact.id,
                    is_main: true,
                },
            ],
        };

        const leadResponse: AmoCRMLeadResponse = await AmoCRMService.createLead(leadData);
        const lead = leadResponse._embedded.leads[0];

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
