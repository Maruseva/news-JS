import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { Data } from '../view/sources/type';

class App {
    private readonly controller: AppController;
    private readonly view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sources = document.querySelector('.sources');
        if (sources) {
            sources.addEventListener('click', (e) =>
                this.controller.getNews(e, (data: Data) => this.view.drawNews(data))
            );
            this.controller.getSources((data: Data) => this.view.drawSources(data));
        }
    }
}

export default App;
