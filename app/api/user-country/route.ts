import {NextResponse} from 'next/server';

export async function GET() {
    const res = await fetch('https://ipinfo.io/json');
    const data = await res.json();

    const locationData = {
        name: data.region,
        code: data.country
    };

    const response = NextResponse.json({data: locationData});

    response.cookies.set('country', JSON.stringify(locationData));

    return response;
}