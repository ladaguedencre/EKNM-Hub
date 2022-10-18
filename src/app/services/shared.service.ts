import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    basebg = 'bg4';

    static APIUrl: string = ''; // INSERT URL HERE

    constructor() {}
}
