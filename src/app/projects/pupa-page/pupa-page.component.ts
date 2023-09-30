import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HubStyler } from 'src/app/common/styler';

@Component({
    selector: 'app-pupa-page',
    templateUrl: './pupa-page.component.html',
    styleUrls: ['./pupa-page.component.css']
})
export class PupaPageComponent {

    source: string = ""

    constructor(private translate: TranslateService) {
        if (this.translate.currentLang == 'ua') {
            this.source = 'assets/projects/pupa.ua.md';
        } else {
            this.source = 'assets/projects/pupa.en.md';
        }

        HubStyler.setStyling(
            document,
            HubStyler.getGradientBackgroundCss('./../../../assets/backgrounds/bg_pupa.jpg')
        );
    }
}
