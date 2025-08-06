type Currency = {
    code: string;
    default_currency: boolean;
    name: string;
    price: number;
    symbol: string;
    symbol_position: "BEFORE" | "AFTER";
    symbol_space: boolean;
};

export function formatPrice(price: number, currency: Currency): string {
    const space = currency.symbol_space ? " " : "";

    if (currency.symbol_position === "BEFORE") {
        return `${currency.symbol}${space}${price}`;
    } else {
        return `${price}${space}${currency.symbol}`;
    }
}
