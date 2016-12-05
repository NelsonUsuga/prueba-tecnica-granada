import { PruebaTecnicaPage } from './app.po';

describe('prueba-tecnica App', function() {
  let page: PruebaTecnicaPage;

  beforeEach(() => {
    page = new PruebaTecnicaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
