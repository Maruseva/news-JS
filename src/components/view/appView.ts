import News from './news/news';
import Sources from './sources/sources';
import { Data } from './sources/type';

export class AppView {
    private news: News;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: Data) {
        const values = data?.articles ? data.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: Data) {
        const values = data?.sources ? data.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
