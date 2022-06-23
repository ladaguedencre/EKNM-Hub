import { Component, OnInit, Input } from '@angular/core';
import { Paragraph } from '../../models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-paragraph',
  templateUrl: './button-paragraph.component.html',
  styleUrls: ['./button-paragraph.component.css']
})
export class ButtonParagraphComponent implements OnInit {

  @Input() paragraph?: Paragraph;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openLink() {
    this.router.navigate([this.paragraph?.link]);
  }

}
