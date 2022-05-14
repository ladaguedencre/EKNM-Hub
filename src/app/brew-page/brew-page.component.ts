import { Component, OnInit } from '@angular/core';
import { SubjectsDataService } from 'src/app/services/subject-data.service';
import { BrewModel } from '../models/brewModel';

@Component({
  selector: 'app-brew-page',
  templateUrl: './brew-page.component.html',
  styleUrls: ['./brew-page.component.css']
})
export class BrewPageComponent implements OnInit {

  constructor(private subjects: SubjectsDataService) { }
  brewDescList: BrewModel[] = [];

  ngOnInit(): void {
    this.brewDescList.push({image:'../../../assets/brewery/etick1.png',description:'brew.beer_1',status:'brew.not_available'} as BrewModel);
    this.brewDescList.push({image:'../../../assets/brewery/etick2.png',description:'brew.beer_2',status:'brew.not_available'} as BrewModel);
    this.brewDescList.push({image:'../../../assets/brewery/etick3.png',description:'brew.beer_3',status:'brew.not_available'} as BrewModel);
    this.subjects.subject(1).next('bgBeer');
  }

  setImgStyle = (i: number) => {
    return{
      'leftimg': i%2===0,
      'rightimg': i%2===1,
    }
  }

  ngOnDestroy(): void {
    this.subjects.subject(1).next('bgMain');
  }

}
