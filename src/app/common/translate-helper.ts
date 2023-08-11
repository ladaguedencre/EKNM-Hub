
export type multitext = { [lang: string]: string };

export class TransateHelper {

    static getTranslated(text: multitext, lang: string) {
        if (lang in text) {
            return text[lang];
        }
        if ('en' in text) {
            return text['en'];
        }
        for (let key in text) {
            return text[key];
        }
        return ''
    }
}