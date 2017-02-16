import { BetaPage } from './app.po';

describe('beta App', function() {
  let page: BetaPage;

  beforeEach(() => {
    page = new BetaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
