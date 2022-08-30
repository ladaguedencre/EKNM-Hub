import { Component, Input, OnInit } from '@angular/core';
import { Paragraph } from 'src/app/models/article';

@Component({
    selector: 'citation-paragraph',
    templateUrl: './citation-paragraph.component.html',
    styleUrls: ['./citation-paragraph.component.css'],
})
export class CitationParagraphComponent implements OnInit {
    @Input() paragraph?: Paragraph;

    constructor() {}

    ngOnInit(): void {}
}
