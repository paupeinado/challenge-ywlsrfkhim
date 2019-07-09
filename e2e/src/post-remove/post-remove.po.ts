import {browser, by, element, ElementArrayFinder, ElementFinder} from 'protractor';
export class PostRemovePage {
    navigateTo() {
        return browser.get('/');
    }

    getCards(): ElementArrayFinder {
        return element.all(by.css('.card-columns .card'));
    }

    getTitle(card: ElementFinder): ElementFinder {
        return card.element(by.css('.card-title'));
    }

    getRemoveButton(card: ElementFinder): ElementFinder {
        return card.element(by.css('button.bg-danger'));
    }

    getDialogConfirmButton(): ElementFinder {
        return element(by.css('.mat-button[ng-reflect-dialog-result="true"]'));
    }
}
