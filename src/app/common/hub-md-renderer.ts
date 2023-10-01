
// Provides set of renderer functions for MarkedRenderer
// HubMdRenderer follows MarkedRenderer namings
export abstract class HubMdRenderer {

    public static paragraph = (text: string) => {
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

    public static heading = (text: string, level: number, raw: string) => {
        if (level == 3) {
            return `<h3 class="article-h3">${text}</h3>`;
        }
        return `<h${level}>${text}</h${level}>`;
    };

    public static image = (href: string, title: string, text: string) => {
        return `<img class="article-img" src='${href}' alt='${title}'>`;
    };

    public static link = (href: string, title: string, text: string) => {
        return `<a class="eknm-button-underlined" href="${href}">${text}</a>`;
    };

    public static br = () => {
        return '';
    };

    public static blockquote = (quote: string) => {
        return `<blockquote class='article-bq'><p>${quote}</p></blockquote>`;
    };

}