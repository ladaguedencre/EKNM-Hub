import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Paragraph } from 'src/app/models/article';
import { SubjectsDataService } from 'src/app/common/subject-data.service';
import { ArchiveService } from '../../models/archive.service';

@Component({
    selector: 'app-article',
    templateUrl: './article-page.component.html',
    styleUrls: ['./article-page.component.css'],
})
export class ArticlePageComponent implements OnInit {
    paragraphs: Paragraph[] = [];
    section: string = '';
    backgroundUrl: string = '';
    logoUrl: string = '';

    accessory: string = '';
    headline: string = '';
    code: string = '';

    showAccessory: boolean = true;
    showName: boolean = false;
    showLogo: boolean = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private libraryService: ArchiveService,
        private subjects: SubjectsDataService
    ) {
        this.code = this.route.snapshot.paramMap.get('code')!;
        this.section = this.route.snapshot['url'][0]['path'];

        this.libraryService
            .getArticleWithId(this.code)
            .toPromise()
            .then((article) => {
                if (!article) {
                    this.headline = 'This article does not exist';
                    return;
                }
                this.headline = article.name;
                this.paragraphs = article.content;
                this.accessory = `${article.author} / ${article.date} / ${article.category}`;
                this.backgroundUrl = article.backgroundUrl ?? '';
                this.logoUrl = article.logoUrl ?? '';
                if (article.section == 'projects') {
                    this.showAccessory = false;
                    if (this.logoUrl.length > 0) {
                        this.showLogo = true;
                    }
                    if (this.headline.length > 0) {
                        this.showName = true;
                    }
                }
            });
    }

    ngOnInit(): void {
        if (this.code?.toLowerCase() == 'pupa') {
            this.subjects.subject(1).next('bgPupa');
        }
    }

    ngOnDestroy(): void {
        this.subjects.subject(1).next('bgMain');
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

    setLogo = () => {
        return {
            'background-image': `url(${
                this.logoUrl
            })`,
            'background-size': `contain`,
            'background-repeat': `no-repeat`,
            'background-position': `center`
        };
    };

    navigateBack() {
        this.router.navigate([`/${this.section}`.toLowerCase()]);
    }
}
