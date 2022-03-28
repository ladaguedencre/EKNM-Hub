import { Component, OnInit } from '@angular/core';
import { SubjectsDataService } from 'src/app/services/subject-data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-brew-page',
  templateUrl: './brew-page.component.html',
  styleUrls: ['./brew-page.component.css']
})
export class BrewPageComponent implements OnInit {

  constructor(private subjects: SubjectsDataService) { }

  ngOnInit(): void {
    this.subjects.subject(1).next('bgBeer');
  }

  ngOnDestroy(): void {
    this.subjects.subject(1).next('bgMain');
  }

}
