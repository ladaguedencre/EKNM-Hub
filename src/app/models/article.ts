export interface Article {
    id: string;
    title: string;
    subtitle: string;
    background: string;
    content: string;
}

export interface Paragraph {
    index: number;
    type: string;
    text: string;
    ref: string;
}
