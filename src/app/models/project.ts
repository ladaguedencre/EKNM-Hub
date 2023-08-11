import { multitext } from "../common/translate-helper";

export enum ProjectState {
    Done = 0,
    InProgress = 1,
    Cancelled = 2,
    Other = 3,
}

export enum ProjectType {
    Development,
    Project,
    Other,
}

export namespace ProjectState {
    export function translatedString(
        state: ProjectState,
        lang: string
    ): string {
        let uaLabels = new Map<number, string>([
            [ProjectState.Done, 'Закінчено'],
            [ProjectState.InProgress, 'В процесі'],
            [ProjectState.Cancelled, 'Скасовано'],
            [ProjectState.Other, 'Невідомо'],
        ]);
        let ruLabels = new Map<number, string>([
            [ProjectState.Done, 'Закончено'],
            [ProjectState.InProgress, 'В процессе'],
            [ProjectState.Cancelled, 'Отменено'],
            [ProjectState.Other, 'Неизвестно'],
        ]);
        let enLabels = new Map<number, string>([
            [ProjectState.Done, 'Done'],
            [ProjectState.InProgress, 'In progress'],
            [ProjectState.Cancelled, 'Cancelled'],
            [ProjectState.Other, 'Unknown'],
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
    id: string;
    name: string;
    description: multitext;
    logoUrl: string;
    link: string;
    state: ProjectState;
    type: ProjectType;
}
