import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { PlaceholderPageComponent } from './placeholder-page/placeholder-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';

import { PupaComponent } from './projects/pupa/pupa.component';

import { PokemonAbuseComponent } from './library/pokemon-abuse/pokemon-abuse.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'beer', component: PlaceholderPageComponent },
  { path: 'library', component: LibraryPageComponent },
  { path: 'games', component: GamesPageComponent },
  { path: 'warehouse', component: ShopPageComponent },
  { path: 'info', component: InfoPageComponent },
  { path: 'placeholder', component: PlaceholderPageComponent },

  { path: 'projects/pupa', component: PupaComponent },

  { path: 'lib/pokemon-abuse', component: PokemonAbuseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
