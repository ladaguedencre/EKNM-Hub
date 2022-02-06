import { Injectable } from '@angular/core';
import { ItemType, ItemState, Item } from './item';


@Injectable({
  providedIn: 'root',
})
export class ItemService {
  getStickers() {
    const items = [] as Item[];
    items.push({
        name: 'Стикер Дефолт',
        picUrl: '../../../assets/shop/st1.png',
        count: 0,
        itype: ItemType.Sticker,
        state: ItemState.NotLeft,
    } as Item);
    items.push({
        name: 'Стикер Ночь',
        picUrl: '../../../assets/shop/st2.png',
        count: 0,
        itype: ItemType.Sticker,
        state: ItemState.NotLeft,
    } as Item);
    items.push({
        name: 'Стикер Завод',
        picUrl: '../../../assets/shop/st3.png',
        count: 0,
        itype: ItemType.Sticker,
        state: ItemState.NotLeft,
    } as Item);
    items.push({
        name: 'Стикер Взлом',
        picUrl: '../../../assets/shop/st4.png',
        count: 0,
        itype: ItemType.Sticker,
        state: ItemState.NotLeft,
    } as Item);
    items.push({
        name: 'Стикер Цех',
        picUrl: '../../../assets/shop/st5.png',
        count: 2,
        itype: ItemType.Sticker,
        state: ItemState.Available,
    } as Item);
    return items
  }

  getClothing() {
    const items = [] as Item[];
    items.push({
        name: 'Футболка Loss',
        picUrl: '../../../assets/shop/tshirt1.png',
        count: 0,
        itype: ItemType.Clothing,
        state: ItemState.Preorder,
    } as Item);
    return items
  }
}