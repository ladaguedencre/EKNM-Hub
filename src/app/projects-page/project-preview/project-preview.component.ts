import { Component, OnInit, Input } from '@angular/core';
import { Project, ProjectState } from '../../models/project';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.css']
})
export class ProjectPreviewComponent implements OnInit {

  @Input() project?: Project;
  state?: string;

  constructor(private router: Router, private translate: TranslateService) { }

  ngOnInit(): void {
    this.state = ProjectState.translatedString(this.project!.state, this.translate.currentLang);
  }

  navigateToDetails() {
    if(this.project!.link.includes("http"))
    {
      window.open(this.project!.link);
    }
    else
    {
      this.router.navigate([this.project!.link]);
    }
  }
}
