import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, NEVER, Observable } from 'rxjs';
import { Brew } from './brew';

@Injectable({
    providedIn: 'root',
})
export class BrewService {
    readonly APIUrl = ''; // INSERT KEY HERE

    cache: Observable<Brew[]> = NEVER;

    constructor(private http: HttpClient) {}

    jsonToBrew(json: any): Brew {
        let item = {
            id: json['id'],
            name: json['name'],
            description: json['description'],
            imageUrl: json['image'],
            count: json['count'],
        } as Brew;
        return item;
    }

    getBrews() {
        if (this.cache == NEVER) {
            this.cache = this.http
                .get<any[]>(this.APIUrl + '/brews')
                .pipe(
                    map((jsons: any[]) =>
                        jsons.map((json) => this.jsonToBrew(json))
                    )
                );
        }
        return this.cache;
    }

    getBrewsMock(): Observable<Brew[]> {
        const items: Brew[] = [
            {
                id: 'test1',
                name: 'Luntik 1',
                description: {
                    en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    ua: 'Супер тест 1',
                    ru: 'Супир тест 1',
                },
                imageUrl: '../../assets/mock/icon1.png',
                count: 0,
            },
            {
                id: 'test2',
                name: 'Luntik 2',
                description: {
                    en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    ua: 'Супер тест 2',
                    ru: 'Супир тест 2',
                },
                imageUrl: '../../assets/mock/icon2.png',
                count: 5,
            },
        ];
        return new Observable<Brew[]>((observer) => {
            observer.next(items);
            observer.complete();
        });
    }
}
