import { Component, Input, OnInit } from '@angular/core';
import { Paragraph } from 'src/app/models/article';

@Component({
  selector: 'formatted-paragraph',
  templateUrl: './formatted-paragraph.component.html',
  styleUrls: ['./formatted-paragraph.component.css']
})
export class FormattedParagraphComponent implements OnInit {

  @Input() paragraph?: Paragraph;

  constructor() { }

  ngOnInit(): void {
  }

}
