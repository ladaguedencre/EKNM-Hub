import { Component, OnInit, Input } from '@angular/core';
import { Paragraph } from 'src/app/models/article';
import { SharedService } from '../../common/shared.service';

@Component({
    selector: 'image-paragraph',
    templateUrl: './image-paragraph.component.html',
    styleUrls: ['./image-paragraph.component.css'],
})
export class ImageParagraphComponent implements OnInit {
    @Input() paragraph?: Paragraph;
    imageUrl: string = "";

    constructor() {}

    ngOnInit(): void {
        this.imageUrl = SharedService.BaseAssetUrl + this.paragraph?.ref
    }
}
