import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Paragraph } from 'src/app/models/article';
import { LibraryService } from '../../models/library.service';

@Component({
  selector: 'app-article',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  paragraphs: Paragraph[] = [];
  section: String = "";
  headline: String = "";

  constructor(private router: Router, private route: ActivatedRoute, private libraryService: LibraryService) { 
    console.log(this.route.snapshot)
    const code = this.route.snapshot.paramMap.get('code')!;
    this.section = this.route.snapshot["url"][0]["path"].toUpperCase();

    this.libraryService.getArticleWithIdMock(code).toPromise().then(article => { 
      if (!article) {
        this.headline = "This article does not exist";
        return;
      }
      this.headline = article.name
      this.paragraphs = article.content
      console.log(article)
    });
  }

  ngOnInit(): void {
  }

  navigateBack() {
    this.router.navigate([`/${this.section}`.toLowerCase()]);
  }

}
