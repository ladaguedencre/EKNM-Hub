import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project, ProjectState, ProjectType } from './project';
import { SubjectsDataService } from 'src/app/services/subject-data.service';
import { map, NEVER, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    readonly APIUrl = ''; // INSERT KEY HERE

    cache: Observable<Project[]> = NEVER;

    constructor(private http: HttpClient) {}

    typeToEnum(type: any): ProjectType {
        switch (type) {
            case 0:
                return ProjectType.Development;
            case 1:
                return ProjectType.Game;
        }
        return ProjectType.Other;
    }

    stateToEnum(type: any): ProjectState {
        switch (type) {
            case 0:
                return ProjectState.Done;
            case 1:
                return ProjectState.InProgress;
            case 2:
                return ProjectState.ComingSoon;
        }
        return ProjectState.Cancelled;
    }

    jsonToProject(json: any): Project {
        let project = {
            id: json['id'],
            name: json['name'],
            info: json['info']['en'],
            description: json['description']['en'],
            logoUrl: json['logo'],
            link: json['link'] ?? '',
            state: this.stateToEnum(json['state']),
            type: this.typeToEnum(json['type']),
        } as Project;
        return project;
    }

    getProjects(): Observable<Project[]> {
        if (this.cache == NEVER) {
            this.cache = this.http
                .get<any[]>(this.APIUrl + '/projects')
                .pipe(
                    map((jsons: any[]) =>
                        jsons.map((json) => this.jsonToProject(json))
                    )
                );
        }
        return this.cache;
    }

    getProjectsMock(): Observable<Project[]> {
        const projects: Project[] = [
            {
                id: 'test1',
                name: 'Super Test 1',
                info: 'Just a luntik test',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                logoUrl: '../../assets/mock/icon1.png',
                link: 'http://google.com',
                state: ProjectState.ComingSoon,
                type: ProjectType.Development,
            },
            {
                id: 'test2',
                name: 'Super Test 2',
                info: 'Just a luntik test',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                logoUrl: '../../assets/mock/icon2.png',
                link: '/test2',
                state: ProjectState.Done,
                type: ProjectType.Development,
            },
            {
                id: 'test3',
                name: 'Super Test 3',
                info: 'Just a luntik test',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
