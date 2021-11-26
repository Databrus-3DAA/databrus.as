export type tStock = {
    [Key: string]: {
        [Key: number]: number,
    }
}

export interface iItem {
    name: string,
    label: string,
    price: number,
    stock: tStock,
}

export type iItems = iItem[] | {message?: string};