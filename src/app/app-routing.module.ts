import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { PlaceholderPageComponent } from './placeholder-page/placeholder-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { BrewPageComponent } from './brew-page/brew-page.component';

import { PupaComponent } from './projects/pupa/pupa.component';
import { ScpWaComponent } from './projects/scp-wa/scp-wa.component';
import { ArticlePageComponent } from './articles/article-page/article-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'brew', component: BrewPageComponent },
  { path: 'library', component: LibraryPageComponent },
  { path: 'games', component: GamesPageComponent },
  { path: 'warehouse', component: ShopPageComponent },
  { path: 'info', component: InfoPageComponent },
  { path: 'placeholder', component: PlaceholderPageComponent },

  { path: 'projects/pupa', component: PupaComponent },
  { path: 'projects/scpwa', component: ScpWaComponent },
  { path: 'library/:code', component: ArticlePageComponent },

  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PlaceholderPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
