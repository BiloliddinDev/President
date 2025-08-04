export interface CurrencyType {
    code: string
    name: string,
    symbol: string,
    symbol_position: "BEFORE" | "AFTER"
    symbol_space: boolean,
    price: number,
    "default_currency": boolean
}
