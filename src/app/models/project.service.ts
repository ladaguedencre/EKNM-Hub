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
      description: 'SCP: WA является глобальной стратегией в реальном времени. Игрок управляет Фондом SCP от лица Основателя. Основной целью является постановка на содержание различных аномалий, появляющихся в мире по мере игры. Игроку придётся развивать агентурную сеть чтобы как можно быстрее обнаруживать новые аномалии, создавать мобильные оперативные группы, улучшать их, для непосредственной постановки на содержание, а так же строить и развивать зоны, в которых будут содержаться аномальные объекты. При всем этом деятельность Фонда должна оставаться в тени, человечество не должно знать о существовании чего-то отличающегося от привычного для них мира. В игре присутствуют три вида ресурсов: опыт, знания и класс D (сорре, уже не помню как мы их договорились называть). Опыт игрок получает путём успешного захвата и сдерживания аномальных объектов. За счёт опыта можно нанимать новых работников Фонда, увеличивать количество доступных для строительства зон, увеличивать влияние Фонда в мире, прочее. Прирост знаний зависит от количества аномальных объектов, поставленных на содержание, свойства которых исследуются. От скорости прироста знаний зависит скорость исследования технологий. Исследования могут проводиться в разных областях: экипировка МОГ, строительство зон, способы содержания объектов, прочее. Класс д необходим для поддержания прироста знаний - человеческий ресурс, который расходуется для изучения аномальных объектов. Прирост класса д зависит от влияния Фонда в мире. В игре присутствуют множество концовок, среди которых хорошая только одна - Фонд смог распространить своё влияние по всему миру и поставить на содержание все объекты.',
      detailsUrl: '',
      codename: 'scpwa',
      state: ProjectState.InfoDeleted,
      ptype: ProjectType.Game
    } as Project);
    projects.push({
      name: 'BottleShelf',
      logoUrl: '../../assets/projects/placeholder.jpeg',
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
