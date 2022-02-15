import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../models/article.service';
import { ArticleInfoComponent } from './article-info/article-info.component';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {

  articles = [] as Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }

}
