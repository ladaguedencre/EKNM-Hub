import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { PlaceholderPageComponent } from './placeholder-page/placeholder-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { BrewPageComponent } from './brew-page/brew-page.component';
import { HomePageComponent } from './home-page/home-page.component';

import { ArticlePageComponent } from './articles/article-page/article-page.component';
import { ScpwaPageComponent } from './projects/scpwa-page/scpwa-page.component';
import { PupaPageComponent } from './projects/pupa-page/pupa-page.component';

const routes: Routes = [
    { path: 'hub', component: HomePageComponent},
    { path: 'workshop', component: ProjectsPageComponent },
    { path: 'brewery', component: BrewPageComponent },
    { path: 'archive', component: LibraryPageComponent },
    { path: 'warehouse', component: ShopPageComponent },
    { path: '', component: HomePageComponent },
    { path: 'ua', component: HomePageComponent },
    { path: 'en', component: HomePageComponent },

    { path: 'library/:code', component: ArticlePageComponent },
    { path: 'workshop/scp-wa', component: ScpwaPageComponent },
    { path: 'workshop/pupa', component: PupaPageComponent },

    { path: 'home', redirectTo: '/hub', pathMatch: 'full' },
    { path: '**', component: PlaceholderPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
