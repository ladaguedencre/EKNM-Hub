import { Component, HostListener, OnInit } from '@angular/core';
import { Project, ProjectType, ProjectState } from 'src/app/models/project';
import { HubStyler } from 'src/app/common/styler';
import { ProjectsService } from '../../services/projects-service';
import { ProjectsServiceInterface } from 'src/app/interfaces/projects-service.interface';

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.css'],
})
export class ProjectsPageComponent implements OnInit {
    developments = [] as Project[];
    projects = [] as Project[];

    constructor(private projectsService: ProjectsServiceInterface) {
        HubStyler.setStyling(
            document,
            HubStyler.getGradientBackgroundCss('./../../../assets/backgrounds/bg_workshop.jpg')
        );
    }

    ngOnInit(): void {
        this.projectsService.getAllProjects()
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
            }
        );
    }
}
