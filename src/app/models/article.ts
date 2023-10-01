export interface Article {
    id: string;
    title: string;
    subtitle: string;
    background: string;
    content: string;
}

export function parseArticle(json: {[key: string]: any}): Article {
    return {
        id: json['id'],
        title: json['title'],
        subtitle: json['subtitle'],
        background: json['background'],
        content: json['content'],
    } as Article;;
}
