import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://api.presidentgift.com';

const authString = Buffer.from(
    `${process.env.NEXT_PUBLIC_BASIC_ADMIN || 'president_admin'}:${process.env.NEXT_PUBLIC_BASIC_PASSWORD || 'president@2025'}`
).toString('base64');

const corsHeaders: Record<string, string> = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, currencyCode, Accept-Language, *',
};

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: corsHeaders,
    });
}

async function handleProxy(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
    const { path } = await params;
    const pathStr = (path || []).join('/');
    const search = req.nextUrl.search;
    const targetUrl = `${BASE_URL}/api/v1/${pathStr}${search}`;

    const headers = new Headers();
    req.headers.forEach((value, key) => {
        const lowerKey = key.toLowerCase();
        if (!['host', 'connection', 'content-length'].includes(lowerKey)) {
            headers.set(key, value);
        }
    });

    if (!headers.has('authorization')) {
        headers.set('authorization', `Basic ${authString}`);
    }

    const method = req.method;
    let body: BodyInit | undefined = undefined;
    if (!['GET', 'HEAD'].includes(method)) {
        try {
            body = await req.arrayBuffer();
        } catch {
            // body empty or unreadable
        }
    }

    let lastError: any = null;
    for (let attempt = 0; attempt < 3; attempt++) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 15000);

            const res = await fetch(targetUrl, {
                method,
                headers,
                body,
                signal: controller.signal,
                cache: 'no-store',
            });
            clearTimeout(timeoutId);

            const data = await res.arrayBuffer();
            const resHeaders = new Headers();
            res.headers.forEach((val, key) => {
                if (!key.toLowerCase().startsWith('access-control-')) {
                    resHeaders.set(key, val);
                }
            });
            Object.entries(corsHeaders).forEach(([k, v]) => resHeaders.set(k, v));

            return new NextResponse(data, {
                status: res.status,
                statusText: res.statusText,
                headers: resHeaders,
            });
        } catch (err: any) {
            lastError = err;
            console.warn(`[API Proxy /api/v1/${pathStr}] Attempt ${attempt + 1} failed:`, err?.message || err);
            await new Promise((r) => setTimeout(r, 400 * Math.pow(2, attempt)));
        }
    }

    return NextResponse.json(
        { error: 'Backend connection failed', details: lastError?.message || String(lastError) },
        { status: 502, headers: corsHeaders }
    );
}

export const GET = handleProxy;
export const POST = handleProxy;
export const PUT = handleProxy;
export const DELETE = handleProxy;
export const PATCH = handleProxy;
