import { Component, OnInit } from '@angular/core';
import { Binding } from '../models/article';
import { LibraryService } from '../models/library.service';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {

  bindings = [] as Binding[];

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.bindings = this.libraryService.getPublicBindings();
  }

}
