import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { InfoPageComponent } from './info-page/info-page.component';

const routes: Routes = [
  { path: '', component: ProjectsPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'info', component: InfoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
