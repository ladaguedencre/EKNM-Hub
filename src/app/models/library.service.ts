import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article, Paragraph } from './article';

@Injectable({
  providedIn: 'root',
})

export class LibraryService {

  readonly APIUrl = ''; // INSERT KEY HERE

  articles: { [id: string] : Article; } = {};

  jsonToParagraph(json: any): Paragraph {
    let paragraph = {
      index: json['index'],
      text: json['text'],
      link: json['link'],
      type: json['type']
    } as Paragraph;
    return paragraph
  } 

  jsonToArticle(json: any): Article {
    let article = {
      id: json['id'],
      name: json['name'],
      section: json['section'],
      content: []
    } as Article;
    let paragraphs = []
    for (let parJson of json['content']) {
      paragraphs.push(this.jsonToParagraph(parJson));
    }
    article.content = paragraphs;
    return article
  } 

  constructor(private http: HttpClient) {
  }

  getArticleWithId(id: string): Observable<Article> {
    let article = this.http.get<any>(this.APIUrl + `/articles?id=${id}`).pipe(
      map(json => this.jsonToArticle(json))
    );
    return article
  }

  getArticleWithIdMock(id: string): Observable<Article> {
    const article: Article = {
        id: "test1",
        name: "Super test 1",
        section: "lib",
        content: [
          {
            index: 0,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "",
            type: "text"
          },
          {
            index: 1,
            text: "",
            link: "../../assets/mock/icon1.png",
            type: "image"
          },
          {
            index: 2,
            text: "Luntik test",
            link: "../../assets/mock/icon1.png",
            type: "link"
          }
        ]
      };
    return new Observable<Article>(observer => {
      observer.next(article)
      observer.complete()
    })
  }

}