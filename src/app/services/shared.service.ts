import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    basebg = 'bg4';

    static APIUrl: string = 'https://ttqv99ng55.execute-api.eu-central-1.amazonaws.com/v1'; // INSERT URL HERE

    constructor() {}
}
