// lib/amocrm.ts
interface AmoCRMToken {
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
}

interface ContactData {
    name: string;
    custom_fields_values?: Array<{
        field_code: string;
        values: Array<{ value: string }>;
    }>;
}

interface LeadData {
    name: string;
    price?: number;
    contacts?: Array<{
        id: number;
        is_main: boolean;
    }>;
    custom_fields_values?: Array<{
        field_name: string;
        values: Array<{ value: string }>;
    }>;
}

interface AmoCRMAccount {
    id: number;
    name: string;
    subdomain: string;
    country: string;
    currency: string;
}

type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

class AmoCRMService {
    private readonly baseUrl: string;
    private accessToken: string;
    private refreshToken: string;
    private readonly clientId: string;
    private readonly clientSecret: string;

    constructor() {
        const subdomain = process.env.AMOCRM_SUBDOMAIN;
        if (!subdomain) throw new Error('AMOCRM_SUBDOMAIN is not defined');

        this.baseUrl = `https://${subdomain}.amocrm.ru/api/v4`;
        if (!process.env.AMOCRM_ACCESS_TOKEN) throw new Error('AMOCRM_ACCESS_TOKEN is not defined');
        if (!process.env.AMOCRM_REFRESH_TOKEN) throw new Error('AMOCRM_REFRESH_TOKEN is not defined');
        if (!process.env.AMOCRM_CLIENT_ID) throw new Error('AMOCRM_CLIENT_ID is not defined');
        if (!process.env.AMOCRM_CLIENT_SECRET) throw new Error('AMOCRM_CLIENT_SECRET is not defined');

        this.accessToken = process.env.AMOCRM_ACCESS_TOKEN;
        this.refreshToken = process.env.AMOCRM_REFRESH_TOKEN;
        this.clientId = process.env.AMOCRM_CLIENT_ID;
        this.clientSecret = process.env.AMOCRM_CLIENT_SECRET;
    }

    private async refreshAccessToken(): Promise<void> {
        const response = await fetch(`https://${process.env.AMOCRM_SUBDOMAIN}.amocrm.ru/oauth2/access_token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                client_id: this.clientId,
                client_secret: this.clientSecret,
                grant_type: 'refresh_token',
                refresh_token: this.refreshToken,
            }),
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`Token refresh failed: ${response.status} ${error}`);
        }

        const data: AmoCRMToken = await response.json();
        this.accessToken = data.access_token;
        this.refreshToken = data.refresh_token;

        console.log('✅ Access token refreshed');
    }

    private async apiCall<T = never>(
        endpoint: string,
        method: HTTPMethod = 'GET',
        body?: unknown
    ): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;

        const headers: Record<string, string> = {
            'Authorization': `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
        };

        const options: RequestInit = {
            method,
            headers,
            ...(body ? { body: JSON.stringify(body) } : {})
        };

        const response = await fetch(url, options);

        if (response.status === 401) {
            console.warn('⚠️ Access token expired. Refreshing...');
            await this.refreshAccessToken();

            headers['Authorization'] = `Bearer ${this.accessToken}`;
            const retryResponse = await fetch(url, { ...options, headers });

            if (!retryResponse.ok) {
                const error = await retryResponse.text();
                throw new Error(`API call failed (retry): ${retryResponse.status} - ${error}`);
            }

            return await retryResponse.json();
        }

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`API call failed: ${response.status} - ${error}`);
        }

        return await response.json();
    }

    async createContact(contact: ContactData): Promise<never> {
        return this.apiCall('/contacts', 'POST', [contact]);
    }

    async createLead(lead: LeadData): Promise<never> {
        return this.apiCall('/leads', 'POST', [lead]);
    }

    async getAccount(): Promise<AmoCRMAccount> {
        return this.apiCall<AmoCRMAccount>('/account');
    }
}

const amoCRMService = new AmoCRMService();
export default amoCRMService;