import { Component, Input } from '@angular/core';
import { Highlight } from 'src/app/models/highlight';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HubTranslator } from 'src/app/common/hub-translator';

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
    @Input() isButtonActive?: boolean = false;

    constructor(private router: Router, private translate: TranslateService) {}

    ngOnInit(): void {
        this.title = HubTranslator.getTranslated(this.highlight!.title, this.translate.currentLang)
        this.description = HubTranslator.getTranslated(this.highlight!.description, this.translate.currentLang)
        this.buttonText = HubTranslator.getTranslated(this.highlight!.buttonText, this.translate.currentLang).toUpperCase() + " →"
        console.log("KEK")
        console.log(this.isButtonActive)
    }

    navigateToDetails() {
        if (this.highlight!.link.includes('http')) {
            window.open(this.highlight!.link);
        } else {
            this.router.navigate([`${this.highlight!.link}`]);
        }
    }

}
