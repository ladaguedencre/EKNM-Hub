import { Injectable } from '@angular/core';
import { ProjectContent } from 'src/app/models/project';

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {

    constructor() {}

    // Static content
    contents: { [id: string]: ProjectContent } = {
        'pupa': {
            title: 'PUPA',
            fileId: 'pupa',
            background: './../../../assets/backgrounds/bg_pupa.jpg'
        },
        'scp-wa': {
            title: 'SCP: World Alert',
            fileId: 'scp-wa',
            background: './../../../assets/backgrounds/bg_scpwa.jpg'
        },
    }

    getProjectById(id: string): ProjectContent | null {
        return this.contents[id];
    }
}
