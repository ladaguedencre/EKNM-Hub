import { Component, OnInit } from '@angular/core';
import { Binding } from '../models/binding';
import { ArchiveService } from '../models/archive.service';

@Component({
    selector: 'app-library-page',
    templateUrl: './library-page.component.html',
    styleUrls: ['./library-page.component.css'],
})
export class LibraryPageComponent implements OnInit {
    bindings = [] as Binding[];

    constructor(private archiveService: ArchiveService) {}

    ngOnInit(): void {
        this.archiveService
            .getBindings()
            .toPromise()
            .then((bindings) => {
                if (!bindings) {
                    return;
                }
                this.bindings = bindings;
            });
    }
}
