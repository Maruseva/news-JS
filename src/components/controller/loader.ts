interface Options {
    sources?: string;
    apiKey?: string;
}

export enum Endpoint {
    sources = 'sources',
    everything = 'everything',
}

import { Data } from '../view/sources/type';

class Loader {
    private readonly baseLink: string;
    private readonly options: Options;
    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: { endpoint: Endpoint; options?: Options },
        callback: (data: Data) => void = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Options, endpoint: Endpoint): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        if (Object.keys(urlOptions).length !== 0) {
            Object.keys(urlOptions).forEach((key) => {
                url += `${key}=${urlOptions[key]}&`;
            });
        }

        return url.slice(0, -1);
    }

    private load(method: 'GET', endpoint: Endpoint, callback: (data: Data) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
