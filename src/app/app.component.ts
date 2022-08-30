import {
    ChangeDetectorRef,
    Component,
    Inject,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from './services/shared.service';
import { SubjectsDataService } from './services/subject-data.service';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
    private ngUnsubscribe = new Subject();
    title = 'EKNM Hub';
    bg = 'bgMain';
    constructor(
        public sharedService: SharedService,
        private cdr: ChangeDetectorRef,
        private subjects: SubjectsDataService,
        private translate: TranslateService,
        @Inject(DOCUMENT) private document: Document
    ) {
        translate.setDefaultLang('ua');
    }

    ngOnInit(): void {
        this.document.body.classList.add('blackBG');
        this.subjects
            .subject(1)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((data) => {
                this.bg = data;
                this.cdr.detectChanges();
            });
        const savedLang = localStorage.getItem('language');
        if (!savedLang) {
            localStorage.setItem('language', 'ua');
        } else {
            this.translate.use(savedLang);
        }
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next(true);
        this.ngUnsubscribe.complete();
    }
}
