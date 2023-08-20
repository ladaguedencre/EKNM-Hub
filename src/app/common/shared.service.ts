import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    basebg = 'bg4';

    static APIUrl: string = 'https://eknm.in/api';
    static BaseAssetUrl: string = 'https://storage.eknm.in';

    constructor() {}
}
