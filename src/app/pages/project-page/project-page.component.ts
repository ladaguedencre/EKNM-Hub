import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HubStyler } from 'src/app/common/styler';
import { ProjectsServiceInterface } from 'src/app/interfaces/projects-service.interface';

@Component({
    selector: 'app-project-page',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent {

    source: string = ""
    title: string = ""

    constructor(
        private route: ActivatedRoute,
        private projectsService: ProjectsServiceInterface,
        private translate: TranslateService
    ) {
        let id = this.route.snapshot.paramMap.get('code')!;
        let projectContent = this.projectsService.getProjectContent(id);

        if (projectContent) {
            if (this.translate.currentLang == 'ua') {
                this.source = `assets/projects/${projectContent.fileId}.ua.md`;
            } else {
                this.source = `assets/projects/${projectContent.fileId}.en.md`;
            }
            
            this.title = projectContent.title;
    
            HubStyler.setStyling(
                document,
                HubStyler.getGradientBackgroundCss(projectContent.background)
            );
        } else {
            this.title = "404: Project not found";
        }
    }
}
