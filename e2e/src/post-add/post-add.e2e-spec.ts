import { PostAddPage } from './post-add.po';
import { by, element } from 'protractor';

describe('Create Post', () => {
    let page: PostAddPage;
    beforeEach(() => {
        page = new PostAddPage();
        page.navigateTo();
    });

    it('should create new post', () => {
        page.getTitle().sendKeys('Test e2e Title');
        page.getContent().sendKeys('Test e2e Content');
        page.getImage().sendKeys('https://cdn-images-1.medium.com/max/1200/0*VTQe25t58RFmr76b.jpg');
        page.getLat().sendKeys(111);
        page.getLong().sendKeys(222);
        /* Check form valid */
        const formClasses = page.getForm().getAttribute('class');
        expect(formClasses).toContain('ng-valid');
        /* Save Post */
        const submitBtn = page.getForm().element(by.css('.btn-success'));
        submitBtn.click();
        /* Check Post has been created */
        const lastCardTitle = element(by.css('.card:last-child .card-title'));
        expect(lastCardTitle.getText()).toEqual('Test e2e Title');
    });
});
