import { Component, OnInit, Input } from '@angular/core';
import { Project, ProjectState } from '../models/project';
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
    this.router.navigate([this.project!.detailsUrl]);
  }

  getPreviewState = () => {
    if (this.project!.description.length > 0) {
      return { 
        'visibility': 'visible', 
      };
    } else {
      return { 
        'visibility': 'hidden', 
      };
    }
    
  }

  getDetailsState = () => {
    if (this.project!.detailsUrl.length > 0) {
      return { 
        'visibility': 'visible', 
      };
    } else {
      return { 
        'visibility': 'hidden', 
      };
    }
  }

}
