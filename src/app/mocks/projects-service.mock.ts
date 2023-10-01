import { Injectable } from '@angular/core';
import { Project, ProjectContent, ProjectState, ProjectType } from 'src/app/models/project';
import { ProjectsServiceInterface } from 'src/app/interfaces/projects-service.interface'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProjectsServiceMock implements ProjectsServiceInterface {

    constructor() {}

    getProjectContent(id: string): ProjectContent | null {
        return {
            title: 'TEST',
            fileId: './test.md',
            background: './../../../assets/mock/icon1.png'
        } as ProjectContent;
    }

    getAllProjects(): Observable<Project[]> {
        return new Observable<Project[]>((observer) => {
            observer.next([
                {
                    id: 'test',
                    name: 'TEST #1',
                    description: { 'en': 'Lorem ipsum' },
                    logoUrl: './../../../assets/mock/icon1.png',
                    link: '/test',
                    state: ProjectState.Done,
                    type: ProjectType.Development,
                }
            ]);
            observer.complete();
        });
    }
    
}
