import { PostRemovePage } from './post-remove.po';
import {browser, ElementFinder, protractor} from 'protractor';

describe('Remove Post', () => {
    let page: PostRemovePage;
    beforeEach(() => {
        page = new PostRemovePage();
        page.navigateTo();
    });

    it('should remove a post with title "Test e2e Title"', () => {
        /* Should be at least one card */
        const cards = page.getCards();
        let cardToRemove: ElementFinder = null;
        /* Check there are cards */
        expect(cards.count()).toBeGreaterThan(0);
        /* Search for the first card with title "Test e2e Title" */
        cards.each((card: ElementFinder) => {
            // const post = page.getTitle(card);
            page.getTitle(card).getText().then((title) => {
                if ('Test e2e Title' === title && !cardToRemove) {
                    cardToRemove = card;
                }
            });
        });
        /* Verify we truly removed an item */
        cards.count().then((initialCount: number) => {
            if (cardToRemove) {
                /* Remove card */
                page.getRemoveButton(cardToRemove).click();
                page.getDialogConfirmButton().click();
                browser.sleep(500);
            }
            page.getCards().count().then((count: number) => {
                expect(count).toEqual(initialCount - 1);
            });
        });
    });
});
