import { Component, OnInit } from '@angular/core';
import { ItemService } from '../models/item.service'
import { Item } from '../models/item';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  items = [] as Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

}
