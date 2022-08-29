import { Component, OnInit, Input } from '@angular/core';
import { Paragraph } from 'src/app/models/article';

@Component({
  selector: 'text-paragraph',
  templateUrl: './text-paragraph.component.html',
  styleUrls: ['./text-paragraph.component.css', '../article-styles.css']
})
export class TextParagraphComponent implements OnInit {

  @Input() paragraph?: Paragraph;

  constructor() { }

  ngOnInit(): void {
  }

}
