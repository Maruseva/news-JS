import { Data } from '../view/sources/type';
import AppLoader from './appLoader';
import { Endpoint } from './loader';

class AppController extends AppLoader {
    public getSources(callback: (data: Data) => void): void {
        super.getResp(
            {
                endpoint: Endpoint.sources,
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data: Data) => void): void {
        let target = <HTMLElement>e.target;
        const newsContainer = <HTMLElement>e.currentTarget;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = <string>target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoint.everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = <HTMLElement>target.parentNode;
        }
    }
}

export default AppController;
