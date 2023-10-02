import { Observable } from 'rxjs';
import { multitext } from 'src/app/common/hub-translator';
import { Highlight } from 'src/app/models/highlight';

export abstract class HighlightsServiceInterface {

    public abstract getQuote(): Observable<multitext>;

    public abstract getHighlights(): Observable<Highlight[]>;
    
}
