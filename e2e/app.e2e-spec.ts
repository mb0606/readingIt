import { RedditCloneAng2Page } from './app.po';

describe('reddit-clone-ang-2 App', function() {
  let page: RedditCloneAng2Page;

  beforeEach(() => {
    page = new RedditCloneAng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
