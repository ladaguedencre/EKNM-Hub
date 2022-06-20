import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scp-wa',
  templateUrl: './scp-wa.component.html',
  styleUrls: ['./scp-wa.component.css']
})
export class ScpWaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }

}
