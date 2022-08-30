import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SubjectsDataService } from 'src/app/services/subject-data.service';
import { Brew } from '../models/brew';
import { BrewService } from '../models/brew.service';

@Component({
  selector: 'app-brew-page',
  templateUrl: './brew-page.component.html',
  styleUrls: ['./brew-page.component.css']
})
export class BrewPageComponent implements OnInit {

  brews: Brew[] = [];

  constructor(private subjects: SubjectsDataService, private brewService: BrewService, private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.subjects.subject(1).next('bgBeer');
    this.brewService.getBrewsMock().toPromise().then(brews => { 
      if (!brews) {
        return
      }
      this.brews = brews
    });
  }

  ngOnDestroy(): void {
    this.subjects.subject(1).next('bgMain');
  }

}
