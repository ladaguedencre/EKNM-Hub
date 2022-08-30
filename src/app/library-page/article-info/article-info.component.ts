import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Binding } from 'src/app/models/binding';

@Component({
    selector: 'article-info',
    templateUrl: './article-info.component.html',
    styleUrls: ['./article-info.component.css'],
})
export class ArticleInfoComponent implements OnInit {
    @Input() binding?: Binding;

    constructor(private router: Router) {}

    ngOnInit(): void {}

    navigateToArticle() {
        if (this.binding!.link.includes('http')) {
            window.open(this.binding!.link);
        } else {
            this.router.navigate([`/library${this.binding!.link}`]);
        }
    }

    setBackground = () => {
        return {
            'background-image': `url(${
                this.binding!.imageUrl
            }), linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)`,
        };
    };
}
