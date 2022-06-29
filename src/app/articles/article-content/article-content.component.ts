import { Component, Input, OnInit } from '@angular/core';
import { DisplayParagraph } from '../display-paragraph';

@Component({
  selector: 'article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css']
})
export class ArticleContentComponent implements OnInit {

  @Input() paragraphs?: DisplayParagraph[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
