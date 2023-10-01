import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectPreviewComponent } from './components/project-preview/project-preview.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { PlaceholderPageComponent } from './pages/placeholder-page/placeholder-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { ArticleInfoComponent } from './components/article-info/article-info.component';
import { BrewPageComponent } from 'src/app/pages/brew-page/brew-page.component';
import { ArticlePageComponent } from 'src/app/pages/article-page/article-page.component';
import { BrewItemComponent } from './components/brew-item/brew-item.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { HighlightItemComponent } from './components/highlight-item/highlight-item.component';

// Injectable services
import { ProjectsService } from 'src/app/services/projects-service';
import { ProjectsServiceInterface } from 'src/app/interfaces/projects-service.interface';
import { ProjectsServiceMock } from 'src/app/mocks/projects-service.mock';
import { BrewsService } from 'src/app/services/brews-service';
import { BrewsServiceInterface } from 'src/app/interfaces/brews-service.interface';
import { BrewsServiceMock } from 'src/app/mocks/brews-service.mock';
import { ArchiveService } from 'src/app/services/archive.service';
import { ArchiveServiceInterface } from 'src/app/interfaces/archive-service.interface';
import { ArchiveServiceMock } from 'src/app/mocks/archive-service.mock';
import { WarehouseService } from 'src/app/services/warehouse-service';
import { WarehouseServiceInterface } from 'src/app/interfaces/warehouse-service.interface';
import { WarehouseServiceMock } from 'src/app/mocks/warehouse-service.mock';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ProjectPreviewComponent,
        ProjectsPageComponent,
        SectionTitleComponent,
        PlaceholderPageComponent,
        ShopPageComponent,
        ShopItemComponent,
        LibraryPageComponent,
        ArticleInfoComponent,
        BrewPageComponent,
        ArticlePageComponent,
        BrewItemComponent,
        HomePageComponent,
        FooterComponent,
        ProjectPageComponent,
        HighlightItemComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        MatGridListModule,
        TranslateModule.forRoot(),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        MarkdownModule.forRoot({
            loader: HttpClient,
            markedOptions: {
                provide: MarkedOptions,
                useFactory: markedOptionsFactory,
            },
        }),
    ],
    // Place to inject mock services
    providers: [
        { provide: ProjectsServiceInterface, useClass: ProjectsServiceMock },
        { provide: BrewsServiceInterface, useClass: BrewsServiceMock },
        { provide: ArchiveServiceInterface, useClass: ArchiveServiceMock },
        { provide: WarehouseServiceInterface, useClass: WarehouseServiceMock },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}

export function markedOptionsFactory(): MarkedOptions {
    const renderer = new MarkedRenderer();

    renderer.paragraph = (text: string) => {
        if (text.length == 0 || text == null) {
            return '';
        } else if (text.startsWith('.')) {
            return `<p class="article-p">${text.replace('.', '')}</p>`;
        } else if (text.length < 100) {
            return `<p class="article-p">${text}</p>`;
        } else {
            return `<p class="article-p">&emsp;&emsp;&emsp;${text}</p>`;
        }
    };

    renderer.heading = (text: string, level: number, raw: string, _) => {
        if (level == 3) {
            return `<h3 class="article-h3">${text}</h3>`;
        }
        return `<h${level}>${text}</h${level}>`;
    };

    renderer.image = (href: string, title: string, text: string) => {
        return `<img class="article-img" src='${href}' alt='${title}'>`;
    };

    renderer.link = (href: string, title: string, text: string) => {
        return `<a class="eknm-button-underlined" href="${href}">${text}</a>`;
    };

    renderer.br = () => {
        return '';
    };

    renderer.blockquote = (quote: string) => {
        return `<blockquote class='article-bq'><p>${quote}</p></blockquote>`;
    };

    return {
        renderer: renderer,
        gfm: true,
        breaks: true,
        pedantic: false,
        smartLists: true,
        smartypants: true,
    };
}
