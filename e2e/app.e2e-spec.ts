import { TodoAppReduxPage } from './app.po';

describe('todo-app-redux App', function() {
  let page: TodoAppReduxPage;

  beforeEach(() => {
    page = new TodoAppReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
