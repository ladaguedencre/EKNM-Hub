import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { PlaceholderPageComponent } from './placeholder-page/placeholder-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectPreviewComponent,
    ProjectsPageComponent,
    HomePageComponent,
    SectionTitleComponent,
    InfoPageComponent,
    PlaceholderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
