import { PostListPage } from './post-list.po';

describe('List Post tests', () => {
    let page: PostListPage;
    beforeEach(() => {
        page = new PostListPage();
        page.navigateTo();
    });

    it('should find one or more posts', () => {
        /* Count how many cards are in the page */
        const cardCount = page.getCards().count();
        expect(cardCount).toBeGreaterThan(0);
    });
});
