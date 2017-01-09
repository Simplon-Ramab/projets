import { BoutiquePage } from './app.po';

describe('boutique App', function() {
  let page: BoutiquePage;

  beforeEach(() => {
    page = new BoutiquePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
