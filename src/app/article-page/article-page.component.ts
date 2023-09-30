import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SubjectsDataService } from 'src/app/common/subject-data.service';
import { ArchiveService } from '../models/archive.service';

@Component({
    selector: 'app-article',
    templateUrl: './article-page.component.html',
    styleUrls: ['./article-page.component.css'],
})
export class ArticlePageComponent {

    code: string = '';
    content: string = '';
    title: string = 'Loading...';
    backgroundUrl: string = '';
    subtitle: string = '';

    constructor(
        private route: ActivatedRoute,
        private libraryService: ArchiveService,
    ) {
        this.code = this.route.snapshot.paramMap.get('code')!;

        this.libraryService
            .getArticleWithId(this.code)
            .toPromise()
            .then((article) => {
                if (!article) {
                    this.title = 'This article does not exist';
                    return;
                }
                this.title = article.title;
                this.subtitle = article.subtitle;
                this.content = article.content;
                this.backgroundUrl = article.background;
            });
    }

    setBackground = () => {
        return {
            'background-image': `url(${
                this.backgroundUrl
            })`,
            'background-size': `cover`,
            'background-repeat': `no-repeat`,
            'background-position': `center`
        };
    };
}
