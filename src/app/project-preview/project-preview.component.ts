import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import { Router } from '@angular/router';

@Component({
  selector: 'project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.css']
})
export class ProjectPreviewComponent implements OnInit {

  @Input() project?: Project;

  constructor(private router: Router) { }

  ngOnInit(): void {
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
