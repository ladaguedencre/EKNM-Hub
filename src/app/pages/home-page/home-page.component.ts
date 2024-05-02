import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Highlight } from 'src/app/models/highlight';
import { HubStyler } from 'src/app/common/hub-styler';
import { HubTranslator } from 'src/app/common/hub-translator';
import { HighlightsServiceInterface } from 'src/app/interfaces/highlights-service.interface';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
    mainText: string = '';
    isHubAvailable: boolean = true;

    highlights = [] as Highlight[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private translate: TranslateService,
        private highlightsService: HighlightsServiceInterface
    ) {
        let currentLanguage = this.translate.currentLang;
        this.isHubAvailable = this.route.snapshot?.routeConfig?.path != 'reserve';
        let langParam = this.route.snapshot?.queryParamMap.get('lang')
        if (langParam == 'en' || langParam == 'ua') {
            this.translate.use(langParam);
            localStorage.setItem('language', langParam);
            currentLanguage = langParam;
        }
        this.highlightsService.getQuote()
            .toPromise()
            .then((quote) => {
                this.mainText = HubTranslator.getTranslated(quote!, currentLanguage);
            });
        this.highlightsService.getHighlights()
            .toPromise()
            .then((highlights) => {
                this.highlights = highlights ?? [];
            });
        HubStyler.clearStyling(document);
        HubStyler.setStyling(
            document,
            HubStyler.getGradientBackgroundCss('./../../../assets/backgrounds/bg_landing_top.jpg')
        );
    }

    navigate(path: string) {
        this.router.navigate([path]);
    }
}
