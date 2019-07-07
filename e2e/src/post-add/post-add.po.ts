import { browser, by, element } from 'protractor';
export class PostAddPage {
    navigateTo() {
        return browser.get('/add');
    }

    getForm() {
        return element(by.tagName('form'));
    }

    getTitle() {
        return element(by.name('title'));
    }

    getContent() {
        return element(by.name('content'));
    }

    getImage() {
        return element(by.name('imageUrl'));
    }

    getLat() {
        return element(by.name('lat'));
    }

    getLong() {
        return element(by.name('long'));
    }
}
