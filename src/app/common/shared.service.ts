import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    basebg = 'bg4';

    static APIUrl: string = 'http://eknm.in/api';
    static BaseAssetUrl: string = 'http://storage.eknm.in';

    constructor() {}
}
