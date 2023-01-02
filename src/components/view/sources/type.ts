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
    id: string;
    name: string;
}

export interface Data {
    articles?: DataNews[];
    sources?: DataSource[];
}
