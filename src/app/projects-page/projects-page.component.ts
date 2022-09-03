import { Component, HostListener, OnInit } from '@angular/core';
import { ProjectService } from '../models/project.service';
import { Project, ProjectType } from '../models/project';

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.css'],
})
export class ProjectsPageComponent implements OnInit {
    developments = [] as Project[];
    projects = [] as Project[];

    constructor(private projectService: ProjectService) {}

    ngOnInit(): void {
        this.projectService
            .getProjects()
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
}
