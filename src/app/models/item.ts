export enum ItemType {
  Sticker,
  Clothing,
  Mug,
  Other,
}

export enum ItemState {
  Available = 0,
  NotLeft = 1,
  Preorder = 2,
}

export namespace ItemState {
  export function translatedString(state: ItemState, lang: string): string {
    let uaLabels = new Map<number, string>([
      [ItemState.Available, 'Доступно'], 
      [ItemState.NotLeft, 'Немає в наявності'], 
      [ItemState.Preorder, 'Предзамовлення']
    ]);
    let ruLabels = new Map<number, string>([
      [ItemState.Available, 'Доступно'], 
      [ItemState.NotLeft, 'Нет в наличии'], 
      [ItemState.Preorder, 'Предзаказ']
    ]);
    let enLabels = new Map<number, string>([
      [ItemState.Available, 'Available'], 
      [ItemState.NotLeft, 'None left'], 
      [ItemState.Preorder, 'Preorder']
    ]);
    switch (lang) {
      case 'ua':
        return uaLabels.get(state) as string;
      case 'ru':
        return ruLabels.get(state) as string;
      default:
        return enLabels.get(state) as string;
    }
  }
}

export interface Item {
  name: string;
  name_localized: { [key: string]: string};
  picUrl: string;
  count: number;
  itype: ItemType;
  state: ItemState;
}
