import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'a345fdc6e68a45428048e0212ef9e6e0', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
