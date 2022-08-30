import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SubjectsDataService {
    subjects: any[] = [];
    consistentSubjects: any[] = [];

    subject(key: number): Subject<any> {
        if (this.subjects[key] === undefined) {
            this.subjects[key] = new Subject();
        }
        return this.subjects[key];
    }

    // return a value on subscription even if it hasn't received a next(), which will be initial value
    // always returns the last value set by the next()
    // refer: https://stackoverflow.com/a/40231605

    consistentSubject(key: number, initial: any = null): BehaviorSubject<any> {
        if (this.consistentSubjects[key] === undefined) {
            this.consistentSubjects[key] = new BehaviorSubject(initial);
        }
        return this.consistentSubjects[key];
    }
}
