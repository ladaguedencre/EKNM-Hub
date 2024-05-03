import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { PlaceholderPageComponent } from './pages/placeholder-page/placeholder-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { BrewPageComponent } from './pages/brew-page/brew-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RedirectPageComponent } from './pages/redirect-page/redirect-page.component';

import { ArticlePageComponent } from 'src/app/pages/article-page/article-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { PrivacyPageComponent } from './pages/privacy/privacy-page.component';
import { SharedService } from './common/shared.service';

const routes: Routes = SharedService.IsStaticVersion ? [
    { path: '', component: HomePageComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },

    { path: 'workshop/:code', component: ProjectPageComponent },

    { path: 'workshop/pocyr/privacy', component: PrivacyPageComponent },

    { path: '**', component: PlaceholderPageComponent },
] : [
    { path: 'hub', component: HomePageComponent},
    { path: 'workshop', component: ProjectsPageComponent },
    { path: 'brewery', component: BrewPageComponent },
    { path: 'archive', component: LibraryPageComponent },
    { path: 'warehouse', component: ShopPageComponent },
    { path: '', component: HomePageComponent },

    { path: 'archive/:code', component: ArticlePageComponent },
    { path: 'workshop/:code', component: ProjectPageComponent },

    { path: 'workshop/pocyr/privacy', component: PrivacyPageComponent },

    { path: 'home', redirectTo: '/hub', pathMatch: 'full' },
    { path: '**', component: PlaceholderPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
