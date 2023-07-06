import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    basebg = 'bg4';

    static APIUrl: string = 'http://0.0.0.0:5003';
    static BaseAssetUrl: string = 'assets/';

    constructor() {}
}
