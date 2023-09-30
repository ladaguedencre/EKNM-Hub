import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SharedService } from 'src/app/common/shared.service';
import { Article, Paragraph } from './article';

import testArticleData from './articleTest.json';
import { Binding } from './binding';

@Injectable({
    providedIn: 'root',
})
export class ArchiveService {

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

    jsonToParagraph(json: any): Paragraph {
        let paragraph = {
            index: json['index'],
            text: json['text'],
            ref: json['ref'],
            type: json['type'],
        } as Paragraph;
        return paragraph;
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

    getArticleWithId(id: string): Observable<Article> {
        if (id == 'test') { 
            return new Observable<Article>((observer) => {
                observer.next(this.jsonToArticle(testArticleData) as Article);
                observer.complete();
            });
        }
        let article = this.http
            .get<any>(SharedService.APIUrl + `/archive/${id}`)
            .pipe(map((json) => this.jsonToArticle(json)));
        return article;
    }

    getBindings() {
        return this.http
            .get<any[]>(SharedService.APIUrl + '/bindings')
            .pipe(
                map((jsons: any[]) =>
                    jsons.map((json) => this.jsonToBinding(json))
                )
            );
    }

}
