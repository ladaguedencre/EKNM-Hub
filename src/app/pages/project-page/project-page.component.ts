import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HubStyler } from 'src/app/common/hub-styler';
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

        this.projectsService
            .getProjectContent(id)
            .toPromise()
            .then((content) => {
                if (!content) {
                    this.title = "404: Project not found";
                    return;
                }
                
                if (this.translate.currentLang == 'ua') {
                    this.source = `assets/projects/${content.fileId}.ua.md`;
                } else {
                    this.source = `assets/projects/${content.fileId}.en.md`;
                }
                
                this.title = content.title;
        
                HubStyler.setStyling(
                    document,
                    HubStyler.getGradientBackgroundCss(content.background)
                );
            });
    }
}
