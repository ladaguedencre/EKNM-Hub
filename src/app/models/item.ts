import { SharedService } from 'src/app/common/shared.service';

export enum ItemType {
    Sticker,
    Clothing,
    Mug,
    Other,
}

export function parseItemType(type: any): ItemType {
    switch (type) {
        case 0:
            return ItemType.Sticker;
        case 1:
            return ItemType.Clothing;
    }
    return ItemType.Other;
}


export interface Item {
    id: string;
    name: { [lang: string]: string };
    imageUrl: string;
    count: number;
    type: ItemType;
}

export function parseItem(json: {[key: string]: any}): Item {
    return {
        id: json['id'],
        name: json['name'],
        imageUrl: SharedService.BaseAssetUrl + json['image_url'],
        count: json['count'],
        type: parseItemType(json['type']),
    } as Item;
}