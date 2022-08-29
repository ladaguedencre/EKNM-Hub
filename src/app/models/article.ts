
export interface Article {
  id: string;
  name: string;
  section: string;
  content: Paragraph[];
}

export interface Paragraph {
  index: number;
  type: string;
  text: string;
  link: string;
}
  