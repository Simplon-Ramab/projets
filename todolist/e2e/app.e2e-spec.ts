import { FormulairePage } from './app.po';

describe('formulaire App', function() {
  let page: FormulairePage;

  beforeEach(() => {
    page = new FormulairePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
