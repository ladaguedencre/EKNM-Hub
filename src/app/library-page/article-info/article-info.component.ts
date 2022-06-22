import { Component, OnInit, Input } from '@angular/core';
import { Binding } from '../../models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.css']
})
export class ArticleInfoComponent implements OnInit {

  @Input() binding?: Binding;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToArticle() {
    this.router.navigate([`/library/${this.binding!.id}`]);
  }

  setBackground = () => {
    return {
      'background-image': `url(${this.binding!.imgUrl})`,
    };
  }

}
