import { LaraNgPage } from './app.po';

describe('lara-ng App', () => {
  let page: LaraNgPage;

  beforeEach(() => {
    page = new LaraNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
