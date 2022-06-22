import { Component, OnInit, Input } from '@angular/core';
import { Paragraph } from '../../models/article';

@Component({
  selector: 'combined-paragraph',
  templateUrl: './combined-paragraph.component.html',
  styleUrls: ['./combined-paragraph.component.css', '../article-styles.css']
})
export class CombinedParagraphComponent implements OnInit {

  @Input() paragraph?: Paragraph;
  @Input() order?: number

  constructor() { }

  ngOnInit(): void {
  }

  setImgStyle = () => {
    return{
      'paragraph-img-left': (this.order ?? 0)%2===0,
      'paragraph-img-right': (this.order ?? 0)%2===1,
    }
  }

}
