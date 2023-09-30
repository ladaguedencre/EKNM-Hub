import { Component, OnInit, Input } from '@angular/core';
import { Project, ProjectState } from 'src/app/models/project';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TransateHelper } from 'src/app/common/translate-helper';

@Component({
    selector: 'project-preview',
    templateUrl: './project-preview.component.html',
    styleUrls: ['./project-preview.component.css'],
})
export class ProjectPreviewComponent implements OnInit {

    @Input() project?: Project;
    state?: string;
    description?: string;
    isButtonActive: boolean = false;

    constructor(private router: Router, private translate: TranslateService) {}

    ngOnInit(): void {
        this.state = ProjectState.translatedString(
            this.project!.state,
            this.translate.currentLang
        );
        this.isButtonActive = (this.project?.link ?? '') != '';
        this.description = TransateHelper.getTranslated(this.project!.description, this.translate.currentLang)
    }

    navigateToDetails() {
        if (this.project!.link.includes('http')) {
            window.open(this.project!.link);
        } else {
            this.router.navigate([`/workshop${this.project!.link}`]);
        }
    }

    setColor = () => {
        switch (this.project?.state) {
            case ProjectState.Done:
                return {
                    background: 'Chartreuse',
                };
            case ProjectState.InProgress:
                return {
                    background: 'yellow',
                };
            case ProjectState.Cancelled:
                return {
                    background: 'red',
                };
            default:
                return {
                    background: 'cyan',
                };
        }
    };
}
