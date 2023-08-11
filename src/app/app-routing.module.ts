import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { PlaceholderPageComponent } from './placeholder-page/placeholder-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { BrewPageComponent } from './brew-page/brew-page.component';
import { HomePageComponent } from './home-page/home-page.component';

import { ArticlePageComponent } from './articles/article-page/article-page.component';

const routes: Routes = [
    { path: 'hub', component: HomePageComponent},
    { path: 'workshop', component: ProjectsPageComponent },
    { path: 'brewery', component: BrewPageComponent },
    { path: 'library', component: LibraryPageComponent },
    { path: 'warehouse', component: ShopPageComponent },
    { path: '', component: HomePageComponent },
    { path: 'ua', component: HomePageComponent },
    { path: 'en', component: HomePageComponent },

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
