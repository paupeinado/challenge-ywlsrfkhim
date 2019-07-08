import { PostShowPage } from "./post-show.po";

describe('Create Post tests', () => {
    let page: PostShowPage;

    beforeEach(() => {
        page = new PostShowPage();
        page.navigateTo();
    });

    it('should show the first Post', () => {
        /* Check title is not empty */
        page.getTitle().getText().then((text) => {
            expect(text.length).toBeGreaterThan(0);
        });
        /* Check content is not empty */
        page.getContent().getText().then((text) => {
            expect(text.length).toBeGreaterThan(0);
        });
        /* Check image has source */
        page.getImage().getAttribute('src').then((src) => {
            expect(src.length).toBeGreaterThan(0);
        });
    });
});
