import { ProjetVoyagesPage } from './app.po';

describe('projet-voyages App', function() {
  let page: ProjetVoyagesPage;

  beforeEach(() => {
    page = new ProjetVoyagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
