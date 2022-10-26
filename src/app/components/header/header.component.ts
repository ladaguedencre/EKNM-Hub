import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

    @Input() inputItems?: MenuItem[];
    @Input() includeHub?: boolean;
    items: MenuItem[] = [];

    constructor(private router: Router) {}

    ngOnInit(): void {
        if (this.includeHub ?? true) {
            this.items.push({
                tag: 'HUB',
                path: '/hub',
            });
        } else {
            this.items.push({
                tag: 'EKNM',
                path: '/',
            });
        }
        for (let item of this.inputItems ?? []) {
            this.items.push({
                tag: '/',
                path: '',
            });
            this.items.push(item)
        }
    }

    navigate(path: string) {
        this.router.navigate([path]);
    }
}
