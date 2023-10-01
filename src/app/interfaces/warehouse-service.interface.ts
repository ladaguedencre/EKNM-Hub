import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';

export abstract class WarehouseServiceInterface {

    public abstract getItems(): Observable<Item[]>;
}
