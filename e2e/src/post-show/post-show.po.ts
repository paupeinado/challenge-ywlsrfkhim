import { browser, by, element } from 'protractor';
export class PostShowPage {
    navigateTo() {
        return browser.get('/show/1');
    }

    getTitle() {
        return element(by.css('.card-title'));
    }

    getContent() {
        return element(by.css('.card-text'));
    }

    getImage() {
        return element(by.tagName('img'));
    }
}
