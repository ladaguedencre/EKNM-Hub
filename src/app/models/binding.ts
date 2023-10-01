export interface Binding {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    author: string;
    date: string;
}

export function parseBinding(json: {[key: string]: any}): Binding {
    return {
        id: json['id'],
        title: json['title'],
        subtitle: json['subtitle'],
        category: json['category'],
        author: json['author'],
        date: json['date'],
    } as Binding;
}