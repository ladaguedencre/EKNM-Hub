import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Paragraph } from 'src/app/models/article';

@Component({
  selector: 'button-paragraph',
  templateUrl: './button-paragraph.component.html',
  styleUrls: ['./button-paragraph.component.css']
})
export class ButtonParagraphComponent implements OnInit {

  @Input() paragraph?: Paragraph;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openLink() {
    
    if(this.paragraph!.ref.includes("http"))
    {
      window.open(this.paragraph?.ref);
    }
    else
    {
      this.router.navigate([this.paragraph?.ref]);
    }
  }

}
