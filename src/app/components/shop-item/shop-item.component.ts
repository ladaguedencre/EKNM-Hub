import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item';
import { TranslateService } from '@ngx-translate/core';
import { Translator } from 'src/app/common/translate';

@Component({
    selector: 'shop-item',
    templateUrl: './shop-item.component.html',
    styleUrls: ['./shop-item.component.css'],
})
export class ShopItemComponent implements OnInit {
    @Input() item?: Item;
    name?: string;
    state?: string;

    constructor(private translate: TranslateService) {}

    ngOnInit(): void {
        this.name = this.item?.name[this.translate.currentLang];
        if (!this.name) {
            this.name = this.item?.name['en'];
        }
        this.state = Translator.translatedState(
            this.item!.count,
            this.translate.currentLang
        );
    }

    setColor = () => {
        if (this.item!.count < 0) {
            return {
                color: 'yellow',
            };
        } else if (this.item!.count == 0) {
            return {
                color: 'red',
            };
        } else {
            return {
                color: '#ecf2f4',
            };
        }
    };
}
