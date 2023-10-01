import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Brew } from 'src/app/models/brew';
import { BrewsServiceInterface } from 'src/app/interfaces/brews-service.interface';
import { HubStyler } from 'src/app/common/hub-styler';

@Component({
    selector: 'app-brew-page',
    templateUrl: './brew-page.component.html',
    styleUrls: ['./brew-page.component.css'],
})
export class BrewPageComponent implements OnInit {

    brews: Brew[] = [];

    constructor(
        private brewsService: BrewsServiceInterface,
        private translate: TranslateService
    ) {
        HubStyler.setStyling(
            document,
            HubStyler.getGradientBackgroundCss('./../../../assets/backgrounds/bg_brew.jpg')
        );
    }

    ngOnInit(): void {
        this.brewsService
            .getBrews()
            .toPromise()
            .then((brews) => {
                if (!brews) {
                    return;
                }
                this.brews = brews;
            });
    }
}
