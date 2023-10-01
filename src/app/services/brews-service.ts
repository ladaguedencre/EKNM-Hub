import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, NEVER, Observable } from 'rxjs';
import { SharedService } from 'src/app/common/shared.service';
import { Brew } from 'src/app/models/brew';
import { BrewsServiceInterface } from 'src/app/interfaces/brews-service.interface';

@Injectable({
    providedIn: 'root',
})
export class BrewsService implements BrewsServiceInterface {

    cache: Observable<Brew[]> = NEVER;

    constructor(private http: HttpClient) {}

    jsonToBrew(json: any): Brew {
        let item = {
            id: json['id'],
            name: json['name'],
            description: json['description'],
            imageUrl: SharedService.BaseAssetUrl + json['image_url'],
            count: json['count'],
        } as Brew;
        return item;
    }

    getBrews(): Observable<Brew[]> {
        if (this.cache == NEVER) {
            this.cache = this.http
                .get<any[]>(SharedService.APIUrl + '/brews')
                .pipe(
                    map((jsons: any[]) =>
                        jsons.map((json) => this.jsonToBrew(json))
                    )
                );
        }
        return this.cache;
    }
}
