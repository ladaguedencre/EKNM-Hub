
export type multitext = { [lang: string]: string };

export class HubTranslator {

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

    static translatedState(count: number, lang: string): string {
        let availableLabels = new Map<string, string>([
            ['ua', 'Доступно'],
            ['en', 'Available'],
        ]);
        let notAvailableLabels = new Map<string, string>([
            ['ua', 'Немає в наявності'],
            ['en', 'None left'],
        ]);
        let preorderLabels = new Map<string, string>([
            ['ua', 'Предзамовлення'],
            ['en', 'Preorder'],
        ]);
        if (count < 0) {
            return preorderLabels.get(lang) as string;
        } else if (count == 0) {
            return notAvailableLabels.get(lang) as string;
        } else {
            return availableLabels.get(lang) as string;
        }
    }
}