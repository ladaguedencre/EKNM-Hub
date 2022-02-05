import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ItemService } from '../models/item.service'
import { Item } from '../models/item';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {
  getScreenWidth:any;
  getScreenHeight:any;
  numberOfStickers = 4;
  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    console.log(this.getScreenWidth, this.getScreenHeight);
    this.numberOfStickers = Math.floor(this.getScreenWidth/200);
    if( this.numberOfStickers > 4){
      this.numberOfStickers = 4;
    }
  }

 items = [] as Item[];


 // Constructor
 constructor(private itemService: ItemService) {
     this.onWindowResize();
 }



  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }
}
