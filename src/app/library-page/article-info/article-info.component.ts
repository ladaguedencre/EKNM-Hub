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
        this.router.navigate([`/archive/${this.binding!.id}`]);
    }
}
