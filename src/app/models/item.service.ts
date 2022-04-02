import { Injectable } from '@angular/core';
import { ItemType, ItemState, Item } from './item';


@Injectable({
  providedIn: 'root',
})
export class ItemService {
  getStickers() {
    const items = [] as Item[];
    items.push({
        name: 'Стикер "Дефолт"',
        name_localized: {'ua': 'Стікер "Дефолт"', 'ru': 'Стикер "Дефолт"', 'en': '"Default" Sticker'},
        picUrl: '../../../assets/shop/st1.png',
        count: 0,
        itype: ItemType.Sticker,
        state: ItemState.NotLeft,
    } as Item);
    items.push({
        name: 'Стикер Ночь',
        name_localized: {'ua': 'Стікер "Ніч"', 'ru': 'Стикер "Ночь"', 'en': '"Night" Sticker'},
        picUrl: '../../../assets/shop/st2.png',
        count: 0,
        itype: ItemType.Sticker,
        state: ItemState.NotLeft,
    } as Item);
    items.push({
        name: 'Стикер Завод',
        name_localized: {'ua': 'Стікер "Завод"', 'ru': 'Стикер "Завод"', 'en': '"Factory" Sticker'},
        picUrl: '../../../assets/shop/st3.png',
        count: 0,
        itype: ItemType.Sticker,
        state: ItemState.NotLeft,
    } as Item);
    items.push({
        name: 'Стикер Взлом',
        name_localized: {'ua': 'Стікер "Взлом"', 'ru': 'Стикер "Взлом"', 'en': '"Hack" Sticker'},
        picUrl: '../../../assets/shop/st4.png',
        count: 0,
        itype: ItemType.Sticker,
        state: ItemState.NotLeft,
    } as Item);
    items.push({
        name: 'Стикер Цех',
        name_localized: {'ua': 'Стікер "Цех"', 'ru': 'Стикер "Цех"', 'en': '"Tseh" Sticker'},
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
        name_localized: {'ua': 'Футболка "Loss"', 'ru': 'Футболка "Loss"', 'en': '"Loss" T-Shirt'},
        picUrl: '../../../assets/shop/tshirt1.png',
        count: 0,
        itype: ItemType.Clothing,
        state: ItemState.Preorder,
    } as Item);
    return items
  }
}