import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  currentLanguage = '';

  constructor(private router: Router, private translate: TranslateService) {
    this.currentLanguage = this.translate.currentLang;
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('language', language);
    this.currentLanguage = language;
  }

}
