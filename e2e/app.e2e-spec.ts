import { NgNotesPage } from './app.po';

describe('ng-notes App', () => {
  let page: NgNotesPage;

  beforeEach(() => {
    page = new NgNotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
