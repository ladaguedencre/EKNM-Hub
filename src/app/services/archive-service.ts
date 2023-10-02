import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SharedService } from 'src/app/common/shared.service';
import { Article, parseArticle } from 'src/app/models/article';
import { Binding, parseBinding } from 'src/app/models/binding';
import { ArchiveServiceInterface } from 'src/app/interfaces/archive-service.interface';

@Injectable({
    providedIn: 'root',
})
export class ArchiveService implements ArchiveServiceInterface {

    articles: { [id: string]: Article } = {};

    constructor(private http: HttpClient) {}

    getArticle(id: string): Observable<Article> {
        let article = this.http
            .get<any>(SharedService.APIUrl + `/archive/${id}`)
            .pipe(map((json) => parseArticle(json)));
        return article;
    }

    getBindings(): Observable<Binding[]> {
        return this.http
            .get<any[]>(SharedService.APIUrl + '/bindings')
            .pipe(
                map((jsons: any[]) =>
                    jsons.map((json) => parseBinding(json))
                )
            );
    }

}
