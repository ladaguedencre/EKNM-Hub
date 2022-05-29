import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root',
})

export class ArticleService {
  getArticles() {
    const articles = [] as Article[];
    articles.push({
      id: 'pokemon-abuse',
      firstLine: 'Жестокость и Насилие в мире Покемонов:',
      secondLine: 'настоящая правда про вселенную, в которой царит Стокгольмский синдром и Эксплуатация',
      imgUrl: '../../../assets/library/pokemon_abuse/sadpikachu_2.png',
      author: 'EKNM',
      content: [],
    } as Article);
    return articles
  }
}
  