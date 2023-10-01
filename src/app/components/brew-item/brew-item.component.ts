import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Brew } from 'src/app/models/brew';
import { HubTranslator } from 'src/app/common/hub-translator';

@Component({
    selector: 'brew-item',
    templateUrl: './brew-item.component.html',
    styleUrls: ['./brew-item.component.css'],
})
export class BrewItemComponent implements OnInit {
    @Input() brew?: Brew;
    description?: string;
    state?: string;

    constructor(private translate: TranslateService) {}

    ngOnInit(): void {
        this.description = this.brew?.description[this.translate.currentLang];
        if (!this.description) {
            this.description = this.brew?.description['en'];
        }
        this.state = HubTranslator.translatedState(
            this.brew!.count,
            this.translate.currentLang
        );
    }

    setColor = () => {
        if (this.brew!.count == 0) {
            return {
                color: 'red',
            };
        } else {
            return {
                color: 'green',
            };
        }
    };
}
