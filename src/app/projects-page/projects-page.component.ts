import { Component, HostListener, OnInit } from "@angular/core";
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { ProjectService } from '../models/project.service'
import { Project, ProjectType } from '../models/project';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})

export class ProjectsPageComponent implements OnInit {

  developments = [] as Project[];
  other = [] as Project[];

  constructor(private projectService: ProjectService) {}

  numberOfColumns = 2;
  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if(window.innerWidth >= 600){
      this.numberOfColumns = 2;
    } else {
      this.numberOfColumns = 1;
    }
  }

  ngOnInit(): void {

    this.projectService.getProjectsMock().toPromise().then(projects => { 
      if (!projects) {
        return
      }
      for (let project of projects) {
        switch (project.type) {
          case ProjectType.Development:
            this.developments.push(project);
            break;
          case ProjectType.Other:
            this.other.push(project)
            break;
        }
      }
    });
  }

}
