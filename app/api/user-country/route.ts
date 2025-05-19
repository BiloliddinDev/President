import {NextRequest, NextResponse} from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const ip =
            request.headers.get('x-forwarded-for')?.split(',')[0] || '0.0.0.0';

        const res = await fetch(`https://ipapi.co/${ip}/json/`);
        if (!res.ok) new Error('Failed to fetch IP info');

        const geo = await res.json();
        const countryCode = geo.country || 'US';

        const response = NextResponse.json({country: countryCode});

        response.cookies.set('user-country', countryCode, {
            path: '/',
            maxAge: 60 * 60 * 24,
        });

        return response;
    } catch (error) {
        console.error('Geo error:', error);
        return NextResponse.json({country: 'US'});
    }
}
