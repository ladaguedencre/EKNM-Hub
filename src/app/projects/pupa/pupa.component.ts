import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { SubjectsDataService } from 'src/app/services/subject-data.service';

@Component({
  selector: 'app-pupa',
  templateUrl: './pupa.component.html',
  styleUrls: ['./pupa.component.css']
})
export class PupaComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
              private sharedService: SharedService,
              private subjects: SubjectsDataService,) { }


  ngOnInit(): void {
    this.subjects.subject(1).next('bg1');
  }

  navigateToArticle() {
    this.router.navigate(['/lib/cumzonx-history']);
  }

  viewFile() {
    window.open('../../../assets/pupa/pupa 0.3.pdf', '_blank');
  }

  ngOnDestroy(): void {
    this.subjects.subject(1).next('bg4');
  }


}
