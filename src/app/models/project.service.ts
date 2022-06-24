import { Injectable } from '@angular/core';
import { Project, ProjectState, ProjectType } from './project';
import { SubjectsDataService } from 'src/app/services/subject-data.service';


@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getDevelopments() {
    const projects = [] as Project[];
    projects.push({
      name: 'SCP: WA',
      logoUrl: '../../assets/projects/scpwa.png',
      text: 'projects.scp_text',
      description: 'projects.scp_description',
      detailsUrl: '/projects/scpwa',
      codename: 'scpwa',
      state: ProjectState.Cancelled,
      ptype: ProjectType.Game
    } as Project);
    projects.push({
      name: 'BottleShelf',
      logoUrl: '../../assets/projects/bottleshelf.png',
      text: 'projects.bottleshelf_text',
      description: 'projects.bottleshelf_description',
      detailsUrl: 'https://github.com/monsteroko/EKNM-Bottleshelf',
      codename: 'bottleshelf',
      state: ProjectState.Done,
      ptype: ProjectType.Development
    } as Project);
    return projects
  }

  getOthers() {
    const projects = [] as Project[];
    projects.push({
      name: 'PUPA',
      logoUrl: '../../assets/projects/pupa.png',
      text: 'projects.pupa_text',
      description: 'projects.pupa_description',
      detailsUrl: '/projects/pupa',
      codename: 'pupa',
      state: ProjectState.Done,
      ptype: ProjectType.Other
    } as Project);
    return projects
  }
}
