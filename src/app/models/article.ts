
export interface Article {
  id: string;
  name: string;
  section: string;
  author: string;
  date: string;
  access: string;
  content: Paragraph[];
}

export interface Paragraph {
  index: number;
  type: string;
  text: string;
  ref: string;
}
  