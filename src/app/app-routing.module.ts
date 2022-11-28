import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { PlaceholderPageComponent } from './placeholder-page/placeholder-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { BrewPageComponent } from './brew-page/brew-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { ArticlePageComponent } from './articles/article-page/article-page.component';

const routes: Routes = [
    { path: 'hub', component: HomePageComponent },
    { path: 'workshop', component: ProjectsPageComponent },
    { path: 'brewery', component: BrewPageComponent },
    { path: 'library', component: LibraryPageComponent },
    { path: 'gamery', component: GamesPageComponent },
    { path: 'warehouse', component: ShopPageComponent },
    { path: '', component: LandingPageComponent },
    { path: 'ua', component: LandingPageComponent },
    { path: 'en', component: LandingPageComponent },

    { path: 'library/:code', component: ArticlePageComponent },
    { path: 'workshop/:code', component: ArticlePageComponent },

    { path: 'home', redirectTo: '/hub', pathMatch: 'full' },
    { path: '**', component: PlaceholderPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
