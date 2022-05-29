import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.css']
})
export class ArticleInfoComponent implements OnInit {

  @Input() article?: Article;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToArticle() {
    this.router.navigate([`/lib/${this.article!.id}`]);
  }

  setBackground = () => {
    return {
      'background-image': `url(${this.article!.imgUrl})`,
    };
  }

}
