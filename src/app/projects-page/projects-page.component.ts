import { Component, OnInit } from "@angular/core";
import { ProjectPreviewComponent } from '../project-preview/project-preview.component';
import { ProjectService } from '../models/project.service'
import { Project } from '../models/project';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})

export class ProjectsPageComponent implements OnInit {

  projects = [] as Project[];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

}
