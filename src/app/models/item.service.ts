import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, NEVER, Observable } from 'rxjs';
import { ItemType, Item } from './item';

@Injectable({
    providedIn: 'root',
})
export class ItemService {
    readonly APIUrl = ''; // INSERT KEY HERE

    cache: Observable<Item[]> = NEVER;

    constructor(private http: HttpClient) {}

    typeToEnum(type: any): ItemType {
        switch (type) {
            case 0:
                return ItemType.Sticker;
            case 1:
                return ItemType.Clothing;
        }
        return ItemType.Other;
    }

    jsonToItem(json: any): Item {
        let item = {
            id: json['id'],
            name: json['name'],
            imageUrl: json['image'],
            count: json['count'],
            type: this.typeToEnum(json['type']),
        } as Item;
        return item;
    }

    getItems() {
        if (this.cache == NEVER) {
            this.cache = this.http
                .get<any[]>(this.APIUrl + '/items')
                .pipe(
                    map((jsons: any[]) =>
                        jsons.map((json) => this.jsonToItem(json))
                    )
                );
        }
        return this.cache;
    }

    getItemsMock(): Observable<Item[]> {
        const items: Item[] = [
            {
                id: 'test1',
                name: {
                    en: 'Super Test 1',
                    ua: 'Супер тест 1',
                    ru: 'Супир тест 1',
                },
                imageUrl: '../../assets/mock/icon1.png',
                count: 1,
                type: ItemType.Sticker,
            },
            {
                id: 'test2',
                name: {
                    en: 'Super Test 2',
                },
                imageUrl: '../../assets/mock/icon2.png',
                count: 5,
                type: ItemType.Sticker,
            },
            {
                id: 'test4',
                name: {
                    en: 'Super Test 3',
                },
                imageUrl: '../../assets/mock/icon3.png',
                count: 0,
                type: ItemType.Sticker,
            },
        ];
        return new Observable<Item[]>((observer) => {
            observer.next(items);
            observer.complete();
        });
    }
}
