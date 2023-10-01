import { multitext } from "src/app/common/hub-translator";

export interface Brew {
    id: string;
    name: string;
    description: multitext;
    imageUrl: string;
    count: number;
}
