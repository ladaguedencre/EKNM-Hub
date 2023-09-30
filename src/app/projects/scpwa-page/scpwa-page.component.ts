import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-scpwa-page',
    templateUrl: './scpwa-page.component.html',
    styleUrls: ['./scpwa-page.component.css', ]
})
export class ScpwaPageComponent {

    source: string = ""

    constructor(private translate: TranslateService) {
        if (this.translate.currentLang == 'ua') {
            this.source = "assets/projects/scp-wa.ua.md";
        } else {
            this.source = "assets/projects/scp-wa.en.md";
        }
    }

}

