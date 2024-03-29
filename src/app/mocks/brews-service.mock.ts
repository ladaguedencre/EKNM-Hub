import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brew } from 'src/app/models/brew';
import { BrewsServiceInterface } from 'src/app/interfaces/brews-service.interface';

@Injectable({
    providedIn: 'root',
})
export class BrewsServiceMock implements BrewsServiceInterface {

    constructor() {}

    getBrews(): Observable<Brew[]> {
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
