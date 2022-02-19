import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from './services/shared.service';
import { SubjectsDataService } from './services/subject-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy  {
  private ngUnsubscribe = new Subject();
  title = 'EKNM Hub';
  bg = 'bgMain';
  constructor(public sharedService: SharedService,
              private cdr: ChangeDetectorRef,
              private subjects: SubjectsDataService) { }

  ngOnInit(): void {
    this.subjects.subject(1)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(data => {
      this.bg = data;
      this.cdr.detectChanges();
    });
  }


  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
}
