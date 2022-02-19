import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { PlaceholderPageComponent } from './placeholder-page/placeholder-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ShopItemComponent } from './shop-page/shop-item/shop-item.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PupaComponent } from './projects/pupa/pupa.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { ArticleInfoComponent } from './library-page/article-info/article-info.component';
import { PokemonAbuseComponent } from './library/pokemon-abuse/pokemon-abuse.component';
import { BrewPageComponent } from './brew-page/brew-page.component';

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
    PokemonAbuseComponent,
    BrewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
