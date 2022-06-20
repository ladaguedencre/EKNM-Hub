import { Injectable } from '@angular/core';
import { Project, ProjectState, ProjectType } from './project';


@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getDevelopments() {
    const projects = [] as Project[];
    projects.push({
      name: 'SCP: WA',
      logoUrl: '../../assets/projects/scpwa.png',
      text: 'Глобальная стратегия в реальном времени, игрок управляет Фондом SCP от лица Основателя',
      description: '[ДАННЫЕ УДАЛЕНЫ]',
      detailsUrl: '/projects/scpwa',
      codename: 'scpwa',
      state: ProjectState.Cancelled,
      ptype: ProjectType.Game
    } as Project);
    projects.push({
      name: 'BottleShelf',
      logoUrl: '../../assets/projects/bottleshelf.png',
      text: 'Система контроля и управления баром, коктейлями и ингридиентами',
      description: '',
      detailsUrl: '',
      codename: 'bottleshelf',
      state: ProjectState.InProgress,
      ptype: ProjectType.Development
    } as Project);
    return projects
  }

  getOthers() {
    const projects = [] as Project[];
    projects.push({
      name: 'PUPA',
      logoUrl: '../../assets/projects/pupa.png',
      text: 'Авторская система для ролевых настольных игр',
      description: 'Добро пожаловать в мир, образовавшийся в незапамятные времена на внутреней поверхности тоннеля в ухе панка! В нем вы можете создать своего уникального персонажа с различными характеристиками и особенностями. Пользуйтесь магией, стилями боя, разнообразным оружием и мощными артефактами.',
      detailsUrl: '/projects/pupa',
      codename: 'pupa',
      state: ProjectState.Done,
      ptype: ProjectType.Other
    } as Project);
    return projects
  }
}
