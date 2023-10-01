import { Project, ProjectContent, ProjectState, ProjectType } from 'src/app/models/project';
import { Observable } from 'rxjs';

export abstract class ProjectsServiceInterface {

    public abstract getProjectContent(id: string): ProjectContent | null;

    public abstract getAllProjects(): Observable<Project[]>

}
