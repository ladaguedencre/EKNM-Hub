import { Component, OnInit, Input } from '@angular/core';
import { Paragraph } from '../../models/article';

@Component({
  selector: 'image-paragraph',
  templateUrl: './image-paragraph.component.html',
  styleUrls: ['./image-paragraph.component.css', '../article-styles.css']
})
export class ImageParagraphComponent implements OnInit {

  @Input() paragraph?: Paragraph;

  constructor() { }

  ngOnInit(): void {
  }

}
