import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    basebg = 'bg4';

    static APIUrl: string = 'http://127.0.0.1:5003';
    static BaseAssetUrl: string = 'assets/';

    constructor() {}
}
