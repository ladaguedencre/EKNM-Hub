import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { PlaceholderPageComponent } from './placeholder-page/placeholder-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'articles', component: PlaceholderPageComponent },
  { path: 'articles', component: PlaceholderPageComponent },
  { path: 'games', component: PlaceholderPageComponent },
  { path: 'warehouse', component: PlaceholderPageComponent },
  { path: 'info', component: InfoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
