import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';

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
import { HighlightItemComponent } from './components/highlight-item/highlight-item.component';

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
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}

export function markedOptionsFactory(): MarkedOptions {
    const renderer = new MarkedRenderer();

    var stripText = (text: string) => {
        text = text.trimEnd();
        text = text.replaceAll('&emsp;', '');
        text = text.replaceAll('<p class="article-p">', '');
        text = text.replaceAll('</p>', '');
        text = text.replaceAll('<p>', '');
        return text;
    }
  
    renderer.text = (text: string) => {
        if (text.length == 0 || text == null) {
            return "";
        } else if (text.length < 100) {
            return `<p class="article-p">${text}</p>`;
        } else if (text.startsWith('.')) {
            return `<p class="article-p">${text.replace('.', '')}</p>`;
        } else {
            return `<p class="article-p">&emsp;&emsp;&emsp;${text}</p>`;
        }
    };

    renderer.heading = (text: string, level: number, raw: string, _) => {
        if (level == 3) {
            return `<h3 class="article-h3">${stripText(text)}</h3>`;
        }
        return `<h${level}>${stripText(text)}</h${level}>`;
    }

    renderer.image = (href: string, title: string, text: string) => {
        return `<img class="article-img" src='${href}' alt='${title}'>`;
    }

    renderer.link = (href: string, title: string, text: string) => {
        return `<a class="eknm-button-underlined" href="${href}">${stripText(text)}</a>`
    }

    renderer.br = () => {
        return ""
    }

    renderer.blockquote = (quote: string) => {
        return `<blockquote class='article-bq'><p>${stripText(quote)}</p></blockquote>`;
    }
  
    return {
      renderer: renderer,
      gfm: true,
      breaks: false,
      pedantic: false,
      smartLists: true,
      smartypants: false,
    };
}
