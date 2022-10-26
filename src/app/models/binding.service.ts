import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, NEVER, Observable } from 'rxjs';
import { SharedService } from '../services/shared.service';
import { Binding } from './binding';
import { ItemType, Item } from './item';

@Injectable({
    providedIn: 'root',
})
export class BindingService {

    cache: Observable<Binding[]> = NEVER;

    constructor(private http: HttpClient) {}

    jsonToBinding(json: any): Binding {
        let binding = {
            id: json['id'],
            firstLine: json['headline'],
            secondLine: json['tailline'],
            imageUrl: json['image'],
            link: json['link'],
        } as Binding;
        return binding;
    }

    getBindings() {
        if (SharedService.APIUrl.length == 0) {
            return this.getBindingsMock();
        }
        if (this.cache == NEVER) {
            this.cache = this.http
                .get<any[]>(SharedService.APIUrl + '/bindings')
                .pipe(
                    map((jsons: any[]) =>
                        jsons.map((json) => this.jsonToBinding(json))
                    )
                );
        }
        return this.cache;
    }

    private getBindingsMock(): Observable<Binding[]> {
        const bindings: Binding[] = [
            {
                id: 'test1',
                firstLine: 'Luntik test 1',
                secondLine: 'Super test 228',
                imageUrl: '../../assets/mock/icon1.png',
                link: '/test1',
            },
            {
                id: 'test2',
                firstLine: 'Luntik test 2',
                secondLine: 'Super test super test',
                imageUrl: '../../assets/mock/icon2.png',
                link: '/test2',
            },
        ];
        return new Observable<Binding[]>((observer) => {
            observer.next(bindings);
            observer.complete();
        });
    }
}
