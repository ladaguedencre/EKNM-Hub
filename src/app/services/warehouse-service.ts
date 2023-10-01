import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, NEVER, Observable } from 'rxjs';
import { SharedService } from 'src/app/common/shared.service';
import { Item, parseItem } from 'src/app/models/item';
import { WarehouseServiceInterface } from 'src/app/interfaces/warehouse-service.interface';

@Injectable({
    providedIn: 'root',
})
export class WarehouseService implements WarehouseServiceInterface {
    cache: Observable<Item[]> = NEVER;

    constructor(private http: HttpClient) {}

    getItems(): Observable<Item[]> {
        if (this.cache == NEVER) {
            this.cache = this.http
                .get<any[]>(SharedService.APIUrl + '/goods')
                .pipe(
                    map((jsons: any[]) =>
                        jsons.map((json) => parseItem(json))
                    )
                );
        }
        return this.cache;
    }

}
