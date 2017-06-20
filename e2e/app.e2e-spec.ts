import { CodeThemeSandboxPage } from './app.po';

describe('code-theme-sandbox App', () => {
  let page: CodeThemeSandboxPage;

  beforeEach(() => {
    page = new CodeThemeSandboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
