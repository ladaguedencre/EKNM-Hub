import { multitext } from "../common/translate-helper";

export interface Brew {
    id: string;
    name: string;
    description: multitext;
    imageUrl: string;
    count: number;
}
