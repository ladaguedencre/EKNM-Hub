import { Component, OnInit, Input } from '@angular/core';
import { DisplayParagraph } from '../display-paragraph';

@Component({
  selector: 'text-paragraph',
  templateUrl: './text-paragraph.component.html',
  styleUrls: ['./text-paragraph.component.css', '../article-styles.css']
})
export class TextParagraphComponent implements OnInit {

  @Input() paragraph?: DisplayParagraph;

  constructor() { }

  ngOnInit(): void {
  }

}
