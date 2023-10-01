import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';
import { Binding } from 'src/app/models/binding';
import { ArchiveServiceInterface } from 'src/app/interfaces/archive-service.interface';

@Injectable({
    providedIn: 'root',
})
export class ArchiveServiceMock implements ArchiveServiceInterface {

    getArticle(id: string): Observable<Article> {
        return new Observable<Article>((observer) => {
            observer.next({
                id: 'test',
                title: 'TEST #1',
                subtitle: 'Lorem ipsum',
                background: './../../../assets/mock/icon1.png',
                content: '### No content here',
            });
            observer.complete();
        });
    }

    getBindings(): Observable<Binding[]> {
        return new Observable<Binding[]>((observer) => {
            observer.next([
                {
                    id: 'test',
                    title: 'TEST #1',
                    subtitle: 'Lorem ipsum',
                    category: 'Mock',
                    author: '@luntik',
                    date: '2023',
                }
            ]);
            observer.complete();
        });
    }

}
