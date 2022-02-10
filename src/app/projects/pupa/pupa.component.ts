import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pupa',
  templateUrl: './pupa.component.html',
  styleUrls: ['./pupa.component.css']
})
export class PupaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToArticle() {
    this.router.navigate(['/lib/cumzonx-history']);
  }

  viewFile() {
    window.open('../../../assets/pupa/pupa 0.3.pdf', '_blank');
  }

}
