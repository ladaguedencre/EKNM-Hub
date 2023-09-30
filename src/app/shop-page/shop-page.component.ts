import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ItemService } from '../models/item.service';
import { Item, ItemType } from '../models/item';
import { TranslateService } from '@ngx-translate/core';
import { HubStyler } from '../common/styler';

@Component({
    selector: 'app-shop-page',
    templateUrl: './shop-page.component.html',
    styleUrls: ['./shop-page.component.css'],
})
export class ShopPageComponent implements OnInit {
    getScreenWidth: any;
    getScreenHeight: any;
    numberOfColumns = 4;

    @HostListener('window:resize', ['$event'])
    onWindowResize() {
        this.getScreenWidth = window.innerWidth;
        this.getScreenHeight = window.innerHeight;
        this.numberOfColumns = Math.floor(this.getScreenWidth / 12.5 / parseFloat(getComputedStyle(document.documentElement).fontSize));
        if (this.numberOfColumns > 4) {
            this.numberOfColumns = 4;
        }
    }

    stickers = [] as Item[];
    clothing = [] as Item[];

    // Constructor
    constructor(
        private itemService: ItemService,
        private translate: TranslateService
    ) {
        this.onWindowResize();
        HubStyler.setStyling(
            document,
            HubStyler.getGradientBackgroundCss('./../../../assets/backgrounds/bg_warehouse.jpg')
        );
    }

    ngOnInit(): void {
        this.itemService
            .getItems()
            .toPromise()
            .then((items) => {
                if (!items) {
                    return;
                }
                for (let item of items) {
                    switch (item.type) {
                        case ItemType.Sticker:
                            this.stickers.push(item);
                            break;
                        case ItemType.Clothing:
                            this.clothing.push(item);
                            break;
                    }
                }
            });
    }
}
