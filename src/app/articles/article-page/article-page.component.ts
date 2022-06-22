import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LibraryService } from '../../models/library.service';
import { DisplayParagraph, createDisplayParagraphs } from '../display-paragraph';

@Component({
  selector: 'app-article',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  paragraphs: DisplayParagraph[] = [];
  firstLine: String = "";
  secondLine: String = "";

  constructor(private router: Router, private route: ActivatedRoute, private libraryService: LibraryService) { 
    const code = this.route.snapshot.paramMap.get('code')!;
    const article = libraryService.getArticleWithId(code);
    if (article == null) {
      this.firstLine = "This article does not exist";
    } else {
      this.firstLine = article.info.firstLine;
      this.secondLine = article.info.secondLine;
      this.paragraphs = createDisplayParagraphs(article.content);
    }
  }

  ngOnInit(): void {
  }

  navigateToLibrary() {
    this.router.navigate(['/library']);
  }

}
