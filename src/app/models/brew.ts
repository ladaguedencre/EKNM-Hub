export interface Brew {
    id: string;
    name: string;
    description: {[lang: string]: string};
    imageUrl: string;
    count: number;
}