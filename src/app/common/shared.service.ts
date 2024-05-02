import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    basebg = 'bg4';

    static APIUrl: string = 'https://hub.eknm.in/api';
    static BaseAssetUrl: string = 'https://hub.eknm.in';
    static IsStaticVersion: boolean = true;

    constructor() {}
}
