import { Component, OnInit, Input } from '@angular/core';
import { Highlight } from '../../models/highlight';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TransateHelper } from 'src/app/common/translate-helper';

@Component({
    selector: 'highlight-item',
    templateUrl: './highlight-item.component.html',
    styleUrls: ['./highlight-item.component.css']
})
export class HighlightItemComponent {

    @Input() highlight?: Highlight;
    title?: string;
    description?: string;
    buttonText?: string;

    constructor(private router: Router, private translate: TranslateService) {}

    ngOnInit(): void {
        this.title = TransateHelper.getTranslated(this.highlight!.title, this.translate.currentLang)
        this.description = TransateHelper.getTranslated(this.highlight!.description, this.translate.currentLang)
        this.buttonText = TransateHelper.getTranslated(this.highlight!.buttonText, this.translate.currentLang).toUpperCase() + " →"
    }

    navigateToDetails() {
        if (this.highlight!.link.includes('http')) {
            window.open(this.highlight!.link);
        } else {
            this.router.navigate([`${this.highlight!.link}`]);
        }
    }

}
