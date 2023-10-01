import { Injectable } from '@angular/core';
import { Project, ProjectContent, ProjectState, ProjectType } from 'src/app/models/project';
import { ProjectsServiceInterface } from 'src/app/interfaces/projects-service.interface'
import { SharedService } from 'src/app/common/shared.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProjectsService implements ProjectsServiceInterface {

    constructor() {}

    getProjectContent(id: string): Observable<ProjectContent | null> {
        return new Observable<ProjectContent | null>((observer) => {
            observer.next(this.contents[id]);
            observer.complete();
        });
    }

    // Return observable to comply with other services
    getAllProjects(): Observable<Project[]> {
        return new Observable<Project[]>((observer) => {
            observer.next(this.projects);
            observer.complete();
        });
    }

    // Static contents
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

    // Static projects
    projects: Project[] = [
        {
            id: 'scpwa',
            name: 'SCP: World Alert',
            description: { 'en': 'Real-time strategy game, based on a secret SCP foundation, that is responsible for capturing, containing researching paranormal objects. Gameplay is focused on managing, administrating and maintaining economics of the foundation.', 'ua': 'Стратегія в реальному часі, заснована на роботі секретного фонда SCP, який відповідає за захоплення та дослідження паранормальних об’єктів. Геймплей зосереджений на управлінні, адмініструванні та підтримці економіки фонду.' },
            logoUrl: SharedService.BaseAssetUrl + '/s/5jMYcTGz5hHyP19/download',
            link: '/scp-wa',
            state: ProjectState.Cancelled,
            type: ProjectType.Development,
        },
        {
            id: 'pupa',
            name: 'PUPA',
            description: { 'en': 'Unique universe and tabletop roleplay system, that took all the best elements from D&D and other genre representatives, but also introduced a lot of innovations.', 'ua': 'Унікальний всесвіт і настільна рольова система, яка взяла все найкраще від D&D та інших представників жанру, а також внесла багато інновацій.' },
            logoUrl: SharedService.BaseAssetUrl + '/s/przwSbvfIkgdm7t/download',
            link: '/pupa',
            state: ProjectState.Done,
            type: ProjectType.Project,
        },
        {
            id: 'bottleshelf',
            name: 'Bottleshelf',
            description: { 'en': 'Web-based system for managing goods, components and products. Specially designed for bars and pubs, but can be used in any kind of buisness.', 'ua': 'Веб-система для менеджменту продуктів, компонентів на товарів. Створена спеціально для барі та пабів, але може використовуватись для багатьох інших задач.' },
            logoUrl: SharedService.BaseAssetUrl + '/s/uloFXYtYxvIG9ea/download',
            link: '',
            state: ProjectState.InProgress,
            type: ProjectType.Development,
        },
        {
            id: 'pocyr',
            name: 'PoCyr',
            description: { 'en': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            logoUrl: '../../assets/mock/icon3.png',
            link: '',
            state: ProjectState.Done,
            type: ProjectType.Other,
        }
    ];
    
}
