export interface LanguageType {
    code: string,
    name: string
    active: boolean,
    defaultLanguage: boolean
}

export interface CountryType {
    id: number, 
    name: string,
    code: string,
    defaultCountry: boolean
}