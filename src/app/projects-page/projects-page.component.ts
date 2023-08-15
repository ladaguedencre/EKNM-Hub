import { Component, HostListener, OnInit } from '@angular/core';
import { Project, ProjectType, ProjectState } from '../models/project';
import { map, NEVER, Observable } from 'rxjs';
import { SharedService } from '../common/shared.service';

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.css'],
})
export class ProjectsPageComponent implements OnInit {
    developments = [] as Project[];
    projects = [] as Project[];

    constructor() {}

    ngOnInit(): void {
        this.getProjects()
            .toPromise()
            .then((projects) => {
                if (!projects) {
                    return;
                }
                for (let project of projects) {
                    switch (project.type) {
                        case ProjectType.Development:
                            this.developments.push(project);
                            break;
                        case ProjectType.Project:
                            this.projects.push(project);
                            break;
                    }
                }
            });
    }

    private getProjects(): Observable<Project[]> {
        const projects: Project[] = [
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
            },
        ];
        return new Observable<Project[]>((observer) => {
            observer.next(projects);
            observer.complete();
        });
    }
}
