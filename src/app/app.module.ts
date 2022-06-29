import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectPreviewComponent } from './projects-page/project-preview/project-preview.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { PlaceholderPageComponent } from './placeholder-page/placeholder-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ShopItemComponent } from './shop-page/shop-item/shop-item.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PupaComponent } from './projects/pupa/pupa.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { ArticleInfoComponent } from './library-page/article-info/article-info.component';
import { BrewPageComponent } from './brew-page/brew-page.component';
import { ScpWaComponent } from './projects/scp-wa/scp-wa.component';
import { ArticlePageComponent } from './articles/article-page/article-page.component';
import { TextParagraphComponent } from './articles/text-paragraph/text-paragraph.component';
import { ImageParagraphComponent } from './articles/image-paragraph/image-paragraph.component';
import { CombinedParagraphComponent } from './articles/combined-paragraph/combined-paragraph.component';
import { ButtonParagraphComponent } from './articles/button-paragraph/button-paragraph.component';
import { ArticleContentComponent } from './articles/article-content/article-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectPreviewComponent,
    ProjectsPageComponent,
    HomePageComponent,
    SectionTitleComponent,
    InfoPageComponent,
    PlaceholderPageComponent,
    GamesPageComponent,
    ShopPageComponent,
    ShopItemComponent,
    PupaComponent,
    LibraryPageComponent,
    ArticleInfoComponent,
    BrewPageComponent,
    ScpWaComponent,
    ArticlePageComponent,
    TextParagraphComponent,
    ImageParagraphComponent,
    CombinedParagraphComponent,
    ButtonParagraphComponent,
    ArticleContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatGridListModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
