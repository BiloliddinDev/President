import Cookies from "js-cookie";
import {ProductPriceInterface} from "@/interface/products-interface/products-interface";

export function getCurrencyCode(): string {
    try {
        const raw = Cookies.get("currency");
        return raw ? JSON.parse(raw).code || "USD" : "USD";
    } catch {
        return "USD";
    }
}

export function getPriceFor(
    prices?: { currency: ProductPriceInterface; price: number }[],
    code?: string
): { currency: ProductPriceInterface; price: number } | undefined {
    if (!Array.isArray(prices) || prices.length === 0) return undefined;
    if (code) {
        const hit = prices.find(p => p?.currency?.code === code);
        if (hit) return hit;
    }
    return prices.find(p => p?.currency?.default_currency) || prices[0];
}
