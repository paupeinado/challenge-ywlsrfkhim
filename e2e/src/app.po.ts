import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path) {
    const navigateUrl = browser.baseUrl + path;
    return browser.get(navigateUrl) as Promise<any>;
  }

  getTitleText() {
    return browser.getTitle() as Promise<string>;
  }

  getFirstPost() {
    return element(by.css('.card:first-child'));
  }
}
