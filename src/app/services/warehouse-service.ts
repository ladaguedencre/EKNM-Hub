import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, NEVER, Observable } from 'rxjs';
import { SharedService } from 'src/app/common/shared.service';
import { ItemType, Item } from 'src/app/models/item';
import { WarehouseServiceInterface } from 'src/app/interfaces/warehouse-service.interface';

@Injectable({
    providedIn: 'root',
})
export class WarehouseService implements WarehouseServiceInterface {
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
            imageUrl: SharedService.BaseAssetUrl + json['image_url'],
            count: json['count'],
            type: this.typeToEnum(json['type']),
        } as Item;
        return item;
    }

    getItems(): Observable<Item[]> {
        if (this.cache == NEVER) {
            this.cache = this.http
                .get<any[]>(SharedService.APIUrl + '/goods')
                .pipe(
                    map((jsons: any[]) =>
                        jsons.map((json) => this.jsonToItem(json))
                    )
                );
        }
        return this.cache;
    }

}
