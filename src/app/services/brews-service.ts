import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, NEVER, Observable } from 'rxjs';
import { Brew, parseBrew } from 'src/app/models/brew';
import { BrewsServiceInterface } from 'src/app/interfaces/brews-service.interface';
import { SharedService } from 'src/app/common/shared.service';

@Injectable({
    providedIn: 'root',
})
export class BrewsService implements BrewsServiceInterface {

    cache: Observable<Brew[]> = NEVER;

    constructor(private http: HttpClient) {}

    getBrews(): Observable<Brew[]> {
        if (this.cache == NEVER) {
            this.cache = this.http
                .get<any[]>(SharedService.APIUrl + '/brews')
                .pipe(
                    map((jsons: any[]) =>
                        jsons.map((json) => parseBrew(json))
                    )
                );
        }
        return this.cache;
    }
}
