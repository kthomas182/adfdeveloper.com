import { AdfdeveloperPage } from './app.po';

describe('adfdeveloper App', function() {
  let page: AdfdeveloperPage;

  beforeEach(() => {
    page = new AdfdeveloperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
