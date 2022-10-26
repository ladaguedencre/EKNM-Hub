import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from '../models/menu-item';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
    mainText: string = '';
    currentLanguage = '';

    items: MenuItem[] = [];

    constructor(private router: Router, private translate: TranslateService) {
        this.currentLanguage = this.translate.currentLang;
        this.items.push({
            tag: 'home.projects',
            path: '/workshop',
        });
        this.items.push({
            tag: 'home.articles',
            path: '/library',
        });
        this.items.push({
            tag: 'home.beer',
            path: '/brewery',
        });
        this.items.push({
            tag: 'home.entertainment',
            path: '/gamery',
        });
        this.items.push({
            tag: 'home.warehouse',
            path: '/warehouse',
        });
    }

    navigate(path: string) {
        this.router.navigate([path]);
    }

    useLanguage(language: string): void {
        this.translate.use(language);
        localStorage.setItem('language', language);
        this.currentLanguage = language;
    }
}
