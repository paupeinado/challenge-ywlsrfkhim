import {browser, by, element, ElementArrayFinder} from 'protractor';
export class PostEditPage {
    navigateTo() {
        return browser.get('/edit/1');
    }

    getForm() {
        return element(by.tagName('form'));
    }

    getTitle() {
        return element(by.name('title'));
    }

    getSubmitButton() {
        return this.getForm().element(by.css('.btn-success'));
    }
}
