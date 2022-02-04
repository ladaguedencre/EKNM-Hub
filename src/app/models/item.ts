enum ItemType {
  Sticker,
  TShirt,
  Mug,
  Other,
}

enum ItemState {
  Available = "Доступно",
  NotLeft = "Нет в наличии",
  Preorder = "Предзаказ",
}

interface Item {
  name: string;
  picUrl: string;
  count: number;
  itype: ItemType;
  state: ItemState;
}
