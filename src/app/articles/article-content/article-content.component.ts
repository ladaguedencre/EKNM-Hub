import { Component, Input, OnInit } from '@angular/core';
import { Paragraph } from 'src/app/models/article';

@Component({
  selector: 'article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css']
})
export class ArticleContentComponent implements OnInit {

  @Input() paragraphs?: Paragraph[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
