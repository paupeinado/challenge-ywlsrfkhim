import { browser, by, element } from 'protractor';
export class PostShowPage {
    navigateTo() {
        return browser.get('/show/1');
    }

    getTitle() {
        return element(by.css('app-post-show .card-title'));
    }

    getContent() {
        return element(by.css('app-post-show .card-text'));
    }

    getImage() {
        return element(by.tagName('app-post-show .card img'));
    }
}
