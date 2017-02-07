import { IndeedJobPage } from './app.po';

describe('indeed-job App', function() {
  let page: IndeedJobPage;

  beforeEach(() => {
    page = new IndeedJobPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
