import {browser, by, element, ElementArrayFinder} from 'protractor';
export class PostListPage {
    navigateTo() {
        return browser.get('/');
    }

    getCards(): ElementArrayFinder {
        return element.all(by.css('.card-columns .card'));
    }
}
