import { Component, OnInit, Input } from '@angular/core';
import { Paragraph } from '../../models/article';
import { DisplayParagraph } from '../display-paragraph';

@Component({
  selector: 'combined-paragraph',
  templateUrl: './combined-paragraph.component.html',
  styleUrls: ['./combined-paragraph.component.css', '../article-styles.css']
})
export class CombinedParagraphComponent implements OnInit {

  @Input() paragraph?: DisplayParagraph;
  @Input() order?: number

  constructor() { }

  ngOnInit(): void {
  }

  setImgStyle = () => {
    const dict: { [id: string]: boolean; } = {
      'paragraph-img-left': (this.order ?? 0)%2===0,
      'paragraph-img-right': (this.order ?? 0)%2===1,
    }
    dict[this.paragraph!.subclass] = true;
    return dict;
  }

}
