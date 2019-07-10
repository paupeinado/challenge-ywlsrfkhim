import { PostEditPage } from './post-edit.po';
import { browser } from 'protractor';

describe('Edit Post', () => {
    let page: PostEditPage;
    beforeEach(() => {
        page = new PostEditPage();
        page.navigateTo();
    });

    it('should edit the first post, adding the symbol # in the title', () => {
        const cardTitle = page.getTitle();
        cardTitle.getAttribute('value').then((title: string) => {
            cardTitle.clear().then(() => {
                const newTitle = '#' + title;
                cardTitle.sendKeys(newTitle).then(() => {
                    const submitBtn = page.getSubmitButton();
                    submitBtn.click();
                    browser.sleep(500);
                    page.navigateTo();
                    /* Check post has been edited */
                    page.getTitle().getAttribute('value').then((finalTitle) => {
                        expect(finalTitle).toEqual(newTitle);
                    });
                });
            });
        });
    });
});
