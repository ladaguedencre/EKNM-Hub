import { Component, OnInit, Input } from '@angular/core';
import { DisplayParagraph } from '../display-paragraph';

@Component({
  selector: 'image-paragraph',
  templateUrl: './image-paragraph.component.html',
  styleUrls: ['./image-paragraph.component.css', '../article-styles.css']
})
export class ImageParagraphComponent implements OnInit {

  @Input() paragraph?: DisplayParagraph;

  constructor() { }

  ngOnInit(): void {
  }

  setImgStyle = () => {
    const dict: { [id: string]: boolean; } = {};
    dict[this.paragraph!.subclass] = true;
    return dict;
  }

}
