import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { PlaceholderPageComponent } from './pages/placeholder-page/placeholder-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { BrewPageComponent } from './pages/brew-page/brew-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { ArticlePageComponent } from 'src/app/pages/article-page/article-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

const routes: Routes = [
    { path: 'hub', component: HomePageComponent},
    { path: 'workshop', component: ProjectsPageComponent },
    { path: 'brewery', component: BrewPageComponent },
    { path: 'archive', component: LibraryPageComponent },
    { path: 'warehouse', component: ShopPageComponent },
    { path: '', component: HomePageComponent },
    { path: 'ua', component: HomePageComponent },
    { path: 'en', component: HomePageComponent },

    { path: 'archive/:code', component: ArticlePageComponent },
    { path: 'workshop/:code', component: ProjectPageComponent },

    { path: 'home', redirectTo: '/hub', pathMatch: 'full' },
    { path: '**', component: PlaceholderPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
