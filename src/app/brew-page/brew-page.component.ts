import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SubjectsDataService } from 'src/app/common/subject-data.service';
import { Brew } from 'src/app/models/brew';
import { BrewService } from 'src/app/models/brew.service';
import { HubStyler } from 'src/app/common/styler';

@Component({
    selector: 'app-brew-page',
    templateUrl: './brew-page.component.html',
    styleUrls: ['./brew-page.component.css'],
})
export class BrewPageComponent implements OnInit {
    brews: Brew[] = [];

    constructor(
        private subjects: SubjectsDataService,
        private brewService: BrewService,
        private translate: TranslateService
    ) {
        HubStyler.setStyling(
            document,
            HubStyler.getGradientBackgroundCss('./../../../assets/backgrounds/bg_brew.jpg')
        );
    }

    ngOnInit(): void {
        this.subjects.subject(1).next('bgBeer');
        this.brewService
            .getBrews()
            .toPromise()
            .then((brews) => {
                if (!brews) {
                    return;
                }
                this.brews = brews;
            });
    }

    ngOnDestroy(): void {
        this.subjects.subject(1).next('bgMain');
    }
}
