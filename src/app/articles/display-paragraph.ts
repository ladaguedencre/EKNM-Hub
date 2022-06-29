import { Paragraph, ParagraphType } from "../models/article";

export interface DisplayParagraph {
    type: string;
    subclass: string;
    paragraph: Paragraph;
}

export function createDisplayParagraphs(ps: Paragraph[]) {
    const dps: DisplayParagraph[] = [];
    let combinedOrder = false;
    let subclass = "";
    for (const p of ps) {
        let type = "none"
        if (p.type == ParagraphType.Transition) {
            type = "button"
        } else {
            if (p.text.length > 0) {
                if (p.link.length > 0) {
                    type = "combined" + (combinedOrder ? "1" : "0");
                    combinedOrder = !combinedOrder;
                    subclass = "w-40";
                } else {
                    type = "text"
                }
            } else {
                if (p.link.length > 0) {
                    type = "image";
                    subclass = "paragraph-img-full";
                }
            }
        }
        dps.push({
            type: type,
            subclass: subclass,
            paragraph: p
        } as DisplayParagraph)
    }
    return dps;
}