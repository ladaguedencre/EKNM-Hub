export enum ProjectState {
  Done = "Работает",
  InProgress = "В разработке",
  ComingSoon = "Временно недоступно",
  Cancelled = "Отменено",
  InfoDeleted = "[ДАННЫЕ УДАЛЕНЫ]",
}

export enum ProjectType {
  Development,
  Game,
  Other,
}

export interface Project {
  name: string;
  logoUrl: string;
  text: string;
  description: string;
  codename: string;
  detailsUrl: string;
  state: ProjectState;
  ptype: ProjectType;
}
