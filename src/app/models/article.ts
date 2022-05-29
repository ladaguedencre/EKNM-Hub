export interface Article {
  id: string;
  firstLine: string;
  secondLine: string;
  imgUrl: string;
  author: string;
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
  