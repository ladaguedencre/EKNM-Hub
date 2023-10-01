import { Observable } from 'rxjs';
import { Brew } from 'src/app/models/brew';

export abstract class BrewsServiceInterface {

    public abstract getBrews(): Observable<Brew[]>;

}
