
// объект со всеми валютами
export interface ICurrency {
    [currency: string]: {
        [rate: string]: number
    }
}
export interface ICurrencyConvertList {
    [currency: string]: number
}