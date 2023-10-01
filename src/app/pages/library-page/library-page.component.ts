import { Component, OnInit } from '@angular/core';
import { Binding } from 'src/app/models/binding';
import { HubStyler } from 'src/app/common/hub-styler';
import { ArchiveServiceInterface } from 'src/app/interfaces/archive-service.interface';

@Component({
    selector: 'app-library-page',
    templateUrl: './library-page.component.html',
    styleUrls: ['./library-page.component.css'],
})
export class LibraryPageComponent implements OnInit {
    bindings = [] as Binding[];

    constructor(private archiveService: ArchiveServiceInterface) {
        var style = document.createElement("STYLE");
        style.innerText = HubStyler.getGradientBackgroundCss('./../../../assets/backgrounds/bg_hub.jpg');
        document.body.appendChild(style);
    }

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
