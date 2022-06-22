import { Paragraph } from "../models/article";

export interface DisplayParagraph {
    type: string;
    paragraph: Paragraph;
}

export function createDisplayParagraphs(ps: Paragraph[]) {
    const dps: DisplayParagraph[] = [];
    let combinedOrder = false;
    for (const p of ps) {
        let type = "none"
        if (p.text.length > 0) {
            if (p.link.length > 0) {
                type = "combined" + (combinedOrder ? "1" : "0");
                combinedOrder = !combinedOrder;
            } else {
                type = "text"
            }
        } else {
            if (p.link.length > 0) {
                type = "image";
            }
        }
        dps.push({
            type: type,
            paragraph: p
        } as DisplayParagraph)
    }
    return dps;
}