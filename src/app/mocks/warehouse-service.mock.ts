import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemType, Item } from 'src/app/models/item';
import { WarehouseServiceInterface } from 'src/app/interfaces/warehouse-service.interface';

@Injectable({
    providedIn: 'root',
})
export class WarehouseServiceMock implements WarehouseServiceInterface {

    getItems(): Observable<Item[]> {
        const items: Item[] = [
            {
                id: 'test1',
                name: {
                    en: 'Super Test 1',
                    ua: 'Супер тест 1',
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
