import { DataNews } from '../sources/type';
import './news.css';

class News {
    public draw(data: DataNews[]): void {
        const news: DataNews[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = <DocumentFragment>document.createDocumentFragment();
        const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = <HTMLTemplateElement>newsItemTemp.content.cloneNode(true);
            const newsItem = <HTMLDivElement>newsClone.querySelector('.news__item');
            const newsMetaPhoto = <HTMLDivElement>newsClone.querySelector('.news__meta-photo');
            const newsMetaAuthor = <HTMLLIElement>newsClone.querySelector('.news__meta-author');
            const newsMetaDate = <HTMLLIElement>newsClone.querySelector('.news__meta-date');
            const newsDescriptionTitle = <HTMLHeadingElement>newsClone.querySelector('.news__description-title');
            const newsDescriptionSource = <HTMLHeadingElement>newsClone.querySelector('.news__description-source');
            const newsDescriptionContent = <HTMLParagraphElement>newsClone.querySelector('.news__description-content');
            const newsReadMoreA = <HTMLLinkElement>newsClone.querySelector('.news__read-more a');

            if (newsItem && idx % 2) {
                newsItem.classList.add('alt');
            }

            if (newsMetaPhoto) {
                newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            if (newsMetaAuthor) {
                newsMetaAuthor.textContent = item.author || item.source.name;
            }

            if (newsMetaDate) {
                newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            if (newsDescriptionTitle) {
                newsDescriptionTitle.textContent = item.title;
            }

            if (newsDescriptionSource) {
                newsDescriptionSource.textContent = item.source.name;
            }

            if (newsDescriptionContent) {
                newsDescriptionContent.textContent = item.description;
            }

            if (newsReadMoreA) {
                newsReadMoreA.setAttribute('href', item.url);
            }

            fragment.append(newsClone);
        });

        const newsDiv = <HTMLDivElement>document.querySelector('.news');

        if (newsDiv) {
            newsDiv.innerHTML = '';
            newsDiv.appendChild(fragment);
        }
    }
}

export default News;
