import { Component, OnInit, Input } from '@angular/core';
import { Item, ItemState } from '../../models/item';

@Component({
  selector: 'shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {

  @Input() item?: Item;

  constructor() { }

  ngOnInit(): void {
    const a = this.item;
  }

  setColor = () => {
    if(this.item?.state === ItemState.NotLeft) {
      return {
        'color': 'red',
      };
    }
    return {
      'color': 'white',
    };
  }

}
