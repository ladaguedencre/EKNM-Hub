import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SharedService } from 'src/app/common/shared.service';
import { Article } from 'src/app/models/article';
import { Binding } from 'src/app/models/binding';
import { ArchiveServiceInterface } from 'src/app/interfaces/archive-service.interface';

@Injectable({
    providedIn: 'root',
})
export class ArchiveService implements ArchiveServiceInterface {

    articles: { [id: string]: Article } = {};

    jsonToBinding(json: any): Binding {
        let binding = {
            id: json['id'],
            title: json['title'],
            subtitle: json['subtitle'],
            category: json['category'],
            author: json['author'],
            date: json['date'],
        } as Binding;
        return binding;
    }

    jsonToArticle(json: any): Article {
        let article = {
            id: json['id'],
            title: json['title'],
            subtitle: json['subtitle'],
            background: json['background'],
            content: json['content'],
        } as Article;
        return article;
    }

    constructor(private http: HttpClient) {}

    getArticle(id: string): Observable<Article> {
        let article = this.http
            .get<any>(SharedService.APIUrl + `/archive/${id}`)
            .pipe(map((json) => this.jsonToArticle(json)));
        return article;
    }

    getBindings(): Observable<Binding[]> {
        return this.http
            .get<any[]>(SharedService.APIUrl + '/bindings')
            .pipe(
                map((jsons: any[]) =>
                    jsons.map((json) => this.jsonToBinding(json))
                )
            );
    }

}
