import { ProductPriceInterface } from "@/interface/products-interface/products-interface";

interface LocalePrice {
    currency: ProductPriceInterface; 
    price: number;
}

export function formatCurrency({ currency, price }: LocalePrice): string {
    const formatted = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 0,
    }).format(price ?? 0);

    const code = currency?.code?.toUpperCase?.() || "";

    return `${formatted} ${code}`;
}
