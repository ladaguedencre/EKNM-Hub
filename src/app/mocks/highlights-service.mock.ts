import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { multitext } from 'src/app/common/hub-translator';
import { Highlight } from 'src/app/models/highlight';
import { HighlightsServiceInterface } from 'src/app/interfaces/highlights-service.interface';

@Injectable({
    providedIn: 'root',
})
export class HighlightsServiceMock implements HighlightsServiceInterface {

    constructor() {}

    getQuote(): Observable<multitext> {
        return new Observable<multitext>((observer) => {
            observer.next({
                'ua': 'ua text',
                'en': 'en text'
            });
            observer.complete();
        });
    }

    // Return observable to comply with other services
    getHighlights(): Observable<Highlight[]> {
        return new Observable<Highlight[]>((observer) => {
            observer.next([
                {
                    index: 0,
                    title: { 'en': 'test' },
                    description: { 'en': 'Lorem ipsum' },
                    imageUrl: './../../../assets/mock/icon1.png',
                    buttonText: { 'en': 'Go to test'},
                    link: '/test',
                }
            ]);
            observer.complete();
        });
    }
}
