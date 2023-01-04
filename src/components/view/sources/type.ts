export interface DataNews {
    urlToImage?: string;
    author?: string;
    publishedAt: string;
    title: string;
    description: string;
    url: string;
    source: { name: string };
}

export interface DataSource {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface Data {
    articles?: DataNews[];
    sources?: DataSource[];
}
