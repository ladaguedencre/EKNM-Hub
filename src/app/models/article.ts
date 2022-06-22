export interface Binding {
  id: string;
  firstLine: string;
  secondLine: string;
  imgUrl: string;
  author: string;
}

export interface Article {
  info: Binding;
  content: Paragraph[];
}

export enum ParagraphType {
  Text = 0,
  Transition = 1,
}

export interface Paragraph {
  type: ParagraphType;
  text: string;
  link: string;
}
  