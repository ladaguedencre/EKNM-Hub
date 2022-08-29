import { Component, OnInit } from '@angular/core';
import { Binding } from '../models/binding';
import { BindingService } from '../models/binding.service';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {

  bindings = [] as Binding[];

  constructor(private bindingService: BindingService) { }

  ngOnInit(): void {
    this.bindingService.getBindingsMock().toPromise().then(bindings => { 
      if (!bindings) {
        return
      }
      this.bindings = bindings
    });
  }

}
