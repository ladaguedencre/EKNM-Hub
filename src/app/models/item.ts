export enum ItemType {
    Sticker,
    Clothing,
    Mug,
    Other,
}

export interface Item {
    id: string;
    name: { [lang: string]: string };
    imageUrl: string;
    count: number;
    type: ItemType;
}
