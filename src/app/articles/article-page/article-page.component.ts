import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Paragraph } from 'src/app/models/article';
import { SubjectsDataService } from 'src/app/services/subject-data.service';
import { LibraryService } from '../../models/library.service';

@Component({
  selector: 'app-article',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  paragraphs: Paragraph[] = [];
  section: string = "";
  showAccessory: boolean = true;
  accessory: string = "";
  headline: string = "";
  code: string = "";

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private libraryService: LibraryService,
              private subjects: SubjectsDataService) { 
    console.log(this.route.snapshot)
    this.code = this.route.snapshot.paramMap.get('code')!;
    this.section = this.route.snapshot["url"][0]["path"].toUpperCase();

    this.libraryService.getArticleWithIdMock(this.code).toPromise().then(article => { 
      if (!article) {
        this.headline = "This article does not exist";
        return;
      }
      this.headline = article.name
      this.paragraphs = article.content
      this.accessory = `${article.author} / ${article.date} / ${article.access}`
      if (article.section == "projects") {
        this.showAccessory = false;
      }
      console.log(article)
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

  navigateBack() {
    this.router.navigate([`/${this.section}`.toLowerCase()]);
  }

}
