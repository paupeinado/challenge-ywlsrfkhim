import { PostShowPage } from "./post-show.po";
import { by, element, browser } from "protractor";

describe('Create Post tests', () => {
    let page: PostShowPage;

    beforeEach(() => {
        page = new PostShowPage();
        page.navigateTo();
    });

    it('should show the first Post', () => {
        const title = page.getTitle();
        expect(title.getText.length).toBeGreaterThan(0);

        const content = page.getContent();
        expect(content.getText.length).toBeGreaterThan(0);

        const image = page.getImage();
        expect(image.src.length).toBeGreaterThan(0);
    });
});
