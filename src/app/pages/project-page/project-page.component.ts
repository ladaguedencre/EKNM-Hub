import { HttpClient } from '@angular/common/http';
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
    content: string = ""

    constructor(
        private route: ActivatedRoute,
        private projectsService: ProjectsServiceInterface,
        private translate: TranslateService,
        private http: HttpClient
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

                console.log("loading project...")

                this.http.get(this.source, {responseType: 'text'})
                    .subscribe(data => {
                        this.content = data
                    });

                this.title = content.title;

                HubStyler.setStyling(
                    document,
                    HubStyler.getGradientBackgroundCss(content.background)
                );
            });
    }
}
