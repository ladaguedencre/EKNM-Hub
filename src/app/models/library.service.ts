import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SharedService } from '../common/shared.service';
import { Article, Paragraph } from './article';

import testArticleData from './articleTest.json';

@Injectable({
    providedIn: 'root',
})
export class LibraryService {

    articles: { [id: string]: Article } = {};

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
            name: json['name'],
            section: json['section'],
            author: json['author'],
            date: json['date'],
            category: json['category'],
            backgroundUrl: SharedService.BaseAssetUrl + json['background'],
            logoUrl: json['logo'],
            content: [],
        } as Article;
        let paragraphs = [];
        for (let parJson of json['content']) {
            paragraphs.push(this.jsonToParagraph(parJson));
        }
        article.content = paragraphs;
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
        if (SharedService.APIUrl.length == 0) {
            return this.getArticleWithIdMock(id);
        }
        let article = this.http
            .get<any>(SharedService.APIUrl + `/articles/${id}`)
            .pipe(map((json) => this.jsonToArticle(json)));
        return article;
    }

    private getArticleWithIdMock(id: string): Observable<Article> {
        let article: Article = {
            id: 'mock',
            name: 'Гайд по написанню статей для сайта, який в той же час є статтею для тесту',
            section: 'lib',
            author: 'Admin',
            date: '2022',
            category: 'test',
            backgroundUrl: '../../assets/mock/icon1.png',
            content: [
                {
                    index: 0,
                    text: 'Складна концепція, розуміємо, але що маємо, то маємо. Кожна стаття має назву, автора та дату, а всі інші частини поділяються на параграфи, а кожен параграф має тип. Таким чином на данний момент існують такі типи параграфів: текст, картинка (в стандартому співвідношенні), форматований текст (наприклад для списків), кнопка, роздільник та цитата.',
                    ref: '',
                    type: 'text',
                },
                {
                    index: 1,
                    text: 'Цитати потрібні щоб розбавляти монотонний текст та виділяти основні думки',
                    ref: '',
                    type: 'citation',
                },
                {
                    index: 2,
                    text: 'Також для розбавлення тексту можна використовувати картинки, але не варто їми зловживати, так само як і всіма іншими типами параграфів. Якщо є вібір між цитатою та картинкою, то обирати треба виходячи з контексту. Наприклад якщо картинка несе візуалізаційний зміст необхідний для розуміння тексту (схема, графік, фотографія субʼєкту, тощо), то це вдалий вибір, але якщо від прибирання картинки зміст не втрачається, то краще використати цитату.',
                    ref: '../../assets/mock/icon1.png',
                    type: 'text',
                },
                {
                    index: 3,
                    text: '',
                    ref: '../../assets/mock/icon1.png',
                    type: 'image',
                },
                {
                    index: 4,
                    text: 'До інших деталей',
                    ref: '',
                    type: 'separator',
                },
                {
                    index: 5,
                    text: 'Картинки рекомендується підготувати заздалегіть щоб вони мали правильне співвідношення та розміри. Не треба використовувати завеликі картинки або формат png якщо це не потрібно.',
                    ref: '../../assets/mock/icon1.png',
                    type: 'text',
                },
                {
                    index: 6,
                    text: 'Luntik test',
                    ref: '../../assets/mock/icon1.png',
                    type: 'link',
                },
                {
                    index: 7,
                    text: 'В залежності від секції статті деякі деталі можуть змінюватись, наприклад для проектів назва статті та авторство не будуть відображені, бо вони не мають сенсу в цьому випадку',
                    ref: '../../assets/mock/icon1.png',
                    type: 'text',
                },
            ],
        };
        return new Observable<Article>((observer) => {
            observer.next(article);
            observer.complete();
        });
    }
}
