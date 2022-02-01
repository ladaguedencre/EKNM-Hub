import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imgPath = '../../assets/logohd.png';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  onMouseEnter() {
    //this.imgPath = '../../assets/logohd_selected.png';
  }

  onMouseLeave() {
    //this.imgPath = '../../assets/logohd.png';
  }

}
