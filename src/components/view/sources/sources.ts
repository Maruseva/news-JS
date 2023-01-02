import './sources.css';
import { DataSource } from './type';

class Sources {
    public draw(data: DataSource[] | []) {
        const fragment = <DocumentFragment>document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);
            const sourceItemName = <HTMLSpanElement>sourceClone.querySelector('.source__item-name');
            const sourceItem = <HTMLDivElement>sourceClone.querySelector('.source__item');

            if (sourceItemName) {
                sourceItemName.textContent = item.name;
            }

            if (sourceItem) {
                sourceItem.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sources = <HTMLElement>document.querySelector('.sources');

        if (sources) {
            sources.append(fragment);
        }
    }
}

export default Sources;
