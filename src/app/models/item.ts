export enum ItemType {
  Sticker,
  Clothing,
  Mug,
  Other,
}

export enum ItemState {
  Available = "Доступно",
  NotLeft = "Нет в наличии",
  Preorder = "Предзаказ",
}

export interface Item {
  name: string;
  picUrl: string;
  count: number;
  itype: ItemType;
  state: ItemState;
}
