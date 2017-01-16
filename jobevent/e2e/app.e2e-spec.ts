import { JobeventPage } from './app.po';

describe('jobevent App', function() {
  let page: JobeventPage;

  beforeEach(() => {
    page = new JobeventPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
