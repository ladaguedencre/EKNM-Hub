import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';
import { Binding } from 'src/app/models/binding';

export abstract class ArchiveServiceInterface {

    public abstract getArticle(id: string): Observable<Article>;

    public abstract getBindings(): Observable<Binding[]>;

}
