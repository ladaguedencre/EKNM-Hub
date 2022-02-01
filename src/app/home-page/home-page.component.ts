import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }

  navigateToArticles() {
    this.router.navigate(['/articles']);
  }

  navigateToBeer() {
      this.router.navigate(['/beer']);
    }

  navigateToEntertainment() {
    this.router.navigate(['/games']);
  }

  navigateToWarehouse() {
    this.router.navigate(['/warehouse']);
  }

  navigateToInfo() {
    this.router.navigate(['/info']);
  }

}
