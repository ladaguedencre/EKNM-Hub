import { multitext } from "src/app/common/hub-translator";

export interface Highlight {
    index: number;
    title: multitext;
    description: multitext;
    imageUrl: string;
    buttonText: multitext;
    link: string;
}