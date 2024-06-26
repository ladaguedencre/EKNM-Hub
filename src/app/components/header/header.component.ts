import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/common/shared.service';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

    @Input() includeHub?: boolean;
    items: MenuItem[] = [];
    isStatic: boolean = false;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.isStatic = SharedService.IsStaticVersion;
        this.items.push({
            tag: 'workshop',
            path: '/',
        });
        this.items.push({
            tag: 'brewery',
            path: '/',
        });
        this.items.push({
            tag: 'archive',
            path: '/',
        });
        this.items.push({
            tag: 'warehouse',
            path: '/',
        });
        let separator: MenuItem = {
            tag: ' • ',
            path: '',
        }
        this.items = this.items.flatMap(
            (value, index, array) =>
                array.length - 1 !== index
                    ? [value, separator]
                    : value,
        );
    }

    navigate(path: string) {
        this.router.navigate([path]);
    }
}
