import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayParagraph } from '../display-paragraph';

@Component({
  selector: 'button-paragraph',
  templateUrl: './button-paragraph.component.html',
  styleUrls: ['./button-paragraph.component.css', '../article-styles.css']
})
export class ButtonParagraphComponent implements OnInit {

  @Input() paragraph?: DisplayParagraph;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openLink() {
    this.router.navigate([this.paragraph?.paragraph.link]);
  }

}
