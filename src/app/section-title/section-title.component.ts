import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.css']
})
export class SectionTitleComponent implements OnInit {

  @Input() titleText = 'suka sdelai zagolovok';

  constructor() { }

  ngOnInit(): void {
  }

}
