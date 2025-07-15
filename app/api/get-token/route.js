// app/api/get-token/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch(`https://${process.env.AMOCRM_SUBDOMAIN}.amocrm.ru/oauth2/access_token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                client_id: process.env.AMOCRM_CLIENT_ID,
                client_secret: process.env.AMOCRM_CLIENT_SECRET,
                grant_type: 'authorization_code',
                code: process.env.AMOCRM_AUTHORIZATION_CODE,
                redirect_uri: process.env.AMOCRM_REDIRECT_URI
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('AmoCRM API error:', errorText);
            return NextResponse.json({
                error: 'Failed to get token',
                details: errorText
            }, { status: 400 });
        }

        const data = await response.json();

        console.log('=== AmoCRM TOKENS ===');
        console.log('Access Token:', data.access_token);
        console.log('Refresh Token:', data.refresh_token);
        console.log('Token Type:', data.token_type);
        console.log('Expires In:', data.expires_in);
        console.log('====================');

        return NextResponse.json({
            success: true,
            message: 'Tokenlar muvaffaqiyatli olindi! Console ni tekshiring.',
            tokens: {
                access_token: data.access_token,
                refresh_token: data.refresh_token,
                token_type: data.token_type,
                expires_in: data.expires_in
            }
        });

    } catch (error) {
        console.error('Error getting token:', error);
        return NextResponse.json({
            error: 'Server error',
            details: error.message
        }, { status: 500 });
    }
}




//
// "success": true,
//     "message": "Tokenlar muvaffaqiyatli olindi! Console ni tekshiring.",
//     "tokens": {
//     "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE3MWEyYzFhMTI5YmVlM2IzMDJmOGQ0MGUwMWFhYmQxN2YxYjc3MjQ4MjgzZTQ5M2I2YWI3ZjM4YWNjYWM4ZDA1MWZkYmQ0ZWVlMzY3NmZkIn0.eyJhdWQiOiI3YzQ0NzI5OC01NGEzLTQwZjMtOTk2MS02YmI1MmJmYzdmMjQiLCJqdGkiOiIxNzFhMmMxYTEyOWJlZTNiMzAyZjhkNDBlMDFhYWJkMTdmMWI3NzI0ODI4M2U0OTNiNmFiN2YzOGFjY2FjOGQwNTFmZGJkNGVlZTM2NzZmZCIsImlhdCI6MTc1MTgyNTQzNiwibmJmIjoxNzUxODI1NDM2LCJleHAiOjE3NTE5MTE4MzYsInN1YiI6IjExODMxMTg2IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMyMDkyMzE4LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMWM2YzQ1ZTUtMWY0Yy00MDAwLTkyNjAtZThiYzU2MWNjZGU1IiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.hoIiig80vcKYyxJ1gJk9sLWcLq5Ermc1hZeHQT5Wk2mhQevhzVmkWwbqChe7pj3ifk3zGJ9PCLNyfL7GFTghKybb23TI6PcrM2NCZGTPSs1E4cOiQeI4WXTTI_K7DF5Pdex0YMxMXZE-RnXxYhYW7LBTaiAg-QDebEP9dc3inlrJqP3wec1UOE0Hafj7cRqU_ByrhKfReqMR22JgTKb9f-pIss1X4FwtOvGCnM2ub94AGR1NL3upy2L48YBkboKUvK7uiPTvZ5PnUeNBUe1XoIFzeW12y12zzaCbfvVXg-y6WuQj8ZG1n5bJcgQ_9h7HJeRiKC9S9phbyE8B_QXSig",
//         "refresh_token": "def5020052145d9ee439cba090a1e6969082c5a7f7cee890e81e29de8b7457094ec383bddb3bbf412522ce97a3a9b3d83b6206f8553a8224fdb20d20e89580fe20e05a771eab60a5fe00a25ca52bad39aa6ac7a1cf74bfcd18a72e616dec9062247495216d357bc37396d21585b3248fd1308ff9d3ecfabc0cea227c11f2d38f335a2d7a2bc99bb56f3e94dd4a1ec11579712364a09b624ce8cff7c358380275d5284959d139357ad50a835a55b4dd0779bef79b0bb15f79bce5549514d97fcc5be76916f77410c065457f90f51f270c4d9205d87e2c7be09962d79ff2e8aff9c0d3fc775d045acb1045dba12976c551b90debb31fd65da75a9487e15eea7a6d93b32cbf17a5276a18c2bd5054ed1983b5e0e321978051992f1769bdfd7bd19884defb0563d511527d2a33510ab849bd79aa3086e47ad2461077000614ee9e42b9ec58a1c0d7781f7dad0ea05493ad79ad41cdd60726d295266c509c1ba6bb6ff1119f2bad442e84fc5ef10225fd7fa3ca827186838f39517b2687aef5980effecd197ef3d61345fc1a8903ae13126b07aaf7819bf290da38f454ff3053ef33c9325a90aa9cddd42688f9a5550153126900507e3080eeffd53a9191a5582902e8992204df5733a40171d67801f70c5a691b9172febfa600f5cc917b000c64096339f6cb4e62ef20a7b8841ffc3ac",
//         "token_type": "Bearer",
//         "expires_in": 86400
// }
// }