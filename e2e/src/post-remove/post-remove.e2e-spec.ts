import { PostRemovePage } from './post-remove.po';
import { browser, ElementFinder } from 'protractor';

describe('Remove Post', () => {
    let page: PostRemovePage;
    beforeEach(() => {
        page = new PostRemovePage();
        page.navigateTo();
    });

    it('should remove the post with title "Test e2e Title"', () => {
        /* Should be at least one card */
        const cards = page.getCards();
        const cardCount = page.getCards().count();
        expect(cardCount).toBeGreaterThan(0);
        /* Search for a card with title "Test e2e Title" */
        cards.each((card: ElementFinder) => {
            page.getTitle(card).getText().then((value) => {
                if ('Test e2e Title' === value) {
                    /* Verify we truly removed an item */
                    cardCount.then((initialCount: number) => {
                        page.getRemoveButton(card).click();
                        page.getDialogConfirmButton().click();
                        browser.sleep(500);
                        page.getCards().count().then((count: number) => {
                            expect(count).toEqual(initialCount - 1);
                        });
                    });
                }
            });
        });
    });
});
