import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ItemService } from '../models/item.service'
import { Item } from '../models/item';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {
  getScreenWidth:any;
  getScreenHeight:any;
  numberOfColumns = 4;
  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    console.log(this.getScreenWidth, this.getScreenHeight);
    this.numberOfColumns = Math.floor(this.getScreenWidth/200);
    if( this.numberOfColumns > 4){
      this.numberOfColumns = 4;
    }
  }

  stickers = [] as Item[];
  clothing = [] as Item[];

  // Constructor
  constructor(private itemService: ItemService, private translate: TranslateService) {
      this.onWindowResize();
  }

  ngOnInit(): void {
    this.stickers = this.itemService.getStickers();
    this.clothing = this.itemService.getClothing();
  }
}
