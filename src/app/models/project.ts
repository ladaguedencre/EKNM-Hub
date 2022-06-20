export enum ProjectState {
  Done = 0,
  InProgress = 1,
  ComingSoon = 2,
  Cancelled = 3,
}

export enum ProjectType {
  Development,
  Game,
  Other,
}

export namespace ProjectState {
  export function translatedString(state: ProjectState, lang: string): string {
    let uaLabels = new Map<number, string>([
      [ProjectState.Done, 'Зроблено'], 
      [ProjectState.InProgress, 'В процесі'], 
      [ProjectState.ComingSoon, 'Очікується'],
      [ProjectState.Cancelled, 'Скасовано'],
    ]);
    let ruLabels = new Map<number, string>([
      [ProjectState.Done, 'Сделано'], 
      [ProjectState.InProgress, 'В процессе'], 
      [ProjectState.ComingSoon, 'Ожидается'],
      [ProjectState.Cancelled, 'Отменено'],
    ]);
    let enLabels = new Map<number, string>([
      [ProjectState.Done, 'Done'], 
      [ProjectState.InProgress, 'In progress'], 
      [ProjectState.ComingSoon, 'Coming soon'],
      [ProjectState.Cancelled, 'Cancelled'],
    ]);
    switch (lang) {
      case 'ua':
        return uaLabels.get(state) as string;
      case 'ru':
        return ruLabels.get(state) as string;
      default:
        return enLabels.get(state) as string;
    }
  }
}

export interface Project {
  name: string;
  logoUrl: string;
  text: string;
  description: string;
  codename: string;
  detailsUrl: string;
  state: ProjectState;
  ptype: ProjectType;
}
