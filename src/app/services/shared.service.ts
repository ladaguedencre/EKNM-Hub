import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    basebg = 'bg4';

    static APIUrl: string = ''; // INSERT KEY HERE
    //static APIUrl: string = '';

    constructor() {}
}
