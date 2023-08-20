import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectPreviewComponent } from './components/project-preview/project-preview.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { PlaceholderPageComponent } from './placeholder-page/placeholder-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LibraryPageComponent } from './library-page/library-page.component';
import { ArticleInfoComponent } from './library-page/article-info/article-info.component';
import { BrewPageComponent } from './brew-page/brew-page.component';
import { ArticlePageComponent } from './articles/article-page/article-page.component';
import { TextParagraphComponent } from './articles/text-paragraph/text-paragraph.component';
import { ImageParagraphComponent } from './articles/image-paragraph/image-paragraph.component';
import { ButtonParagraphComponent } from './articles/button-paragraph/button-paragraph.component';
import { BrewItemComponent } from './components/brew-item/brew-item.component';
import { CitationParagraphComponent } from './articles/citation-paragraph/citation-paragraph.component';
import { FormattedParagraphComponent } from './articles/formatted-paragraph/formatted-paragraph.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScpwaPageComponent } from './projects/scpwa-page/scpwa-page.component';
import { PupaPageComponent } from './projects/pupa-page/pupa-page.component';

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
        TextParagraphComponent,
        ImageParagraphComponent,
        ButtonParagraphComponent,
        BrewItemComponent,
        CitationParagraphComponent,
        FormattedParagraphComponent,
        HomePageComponent,
        FooterComponent,
        ScpwaPageComponent,
        PupaPageComponent,
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
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
