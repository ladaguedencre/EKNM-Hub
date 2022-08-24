import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/item';
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

  translatedState(count: number, lang: string): string {
    let availableLabels = new Map<string, string>([
      ['ua', 'Доступно'], 
      ['ru', 'Доступно'], 
      ['en', 'Available']
    ]);
    let notAvailableLabels = new Map<string, string>([
      ['ua', 'Немає в наявності'], 
      ['ru', 'Нет в наличии'], 
      ['en', 'None left']
    ]);
    let preorderLabels = new Map<string, string>([
      ['ua', 'Предзамовлення'], 
      ['ru', 'Предзаказ'], 
      ['en', 'Preorder']
    ]);
    if (count < 0) {
      return preorderLabels.get(lang) as string;
    } else if (count == 0) {
      return notAvailableLabels.get(lang) as string;
    } else {
      return availableLabels.get(lang) as string;
    }
  }

  ngOnInit(): void {
    this.name = this.item?.name[this.translate.currentLang];
    if (!this.name) {
      this.name = this.item?.name['en'];
    }
    this.state = this.translatedState(this.item!.count, this.translate.currentLang);
  }

  setColor = () => {
    if (this.item!.count < 0) {
      return {
        'color': 'yellow',
      };
    } else if (this.item!.count == 0) {
      return {
        'color': 'red',
      };
    } else {
      return {
        'color': 'white',
      };
    }
  }
}
