import { Component, OnInit, Input } from '@angular/core';
import { Item, ItemState } from '../../models/item';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {

  @Input() item?: Item;
  name?: string;
  state?: string;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.name = this.item?.name_localized[this.translate.currentLang];
    if (this.name == null) {
      this.name = this.item?.name;
    }
    this.state = ItemState.translatedString(this.item!.state, this.translate.currentLang);
  }

  setColor = () => {
    switch(this.item?.state) { 
      case ItemState.NotLeft: { 
        return {
          'color': 'red',
        };
      } 
      case ItemState.Preorder: { 
        return {
          'color': 'yellow',
        };
      } 
      default: { 
        return {
          'color': 'white',
        };
      } 
    } 
  }
}
