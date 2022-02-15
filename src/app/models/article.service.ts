import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root',
})

export class ArticleService {
  getArticles() {
    const articles = [] as Article[];
    articles.push({
      firstLine: 'Жестокость и Эксплуатация в мире Покемонов:',
      secondLine: 'настоящая правда про мир, в котором царит Стокгольмский синдром и Эксплуатация',
      imgUrl: '',
      author: 'EKNM',
      detailsUrl: '/lib/pokemon-abuse'
    } as Article);
    return articles
  }
}
  