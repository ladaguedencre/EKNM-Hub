
export class Translator {

    static translatedState(count: number, lang: string): string {
        let availableLabels = new Map<string, string>([
          ['ua', 'Доступно'], 
          ['ru', 'Доступно'], 
          ['en', 'Available']
        ]);
        let notAvailableLabels = new Map<string, string>([
          ['ua', 'Немає в наявності'], 
          ['ru', 'Нет в наличии'], 
          ['en', 'None left']
        ]);
        let preorderLabels = new Map<string, string>([
          ['ua', 'Предзамовлення'], 
          ['ru', 'Предзаказ'], 
          ['en', 'Preorder']
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