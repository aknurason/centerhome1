describe('Test environment', () => {
  beforeEach(() => {
    cy.openCenterHome();
    cy.get('[data-testid="estate-main-card"]').eq(0).click();
  });

  it('Button "Call" test', () => {
    cy.get('[data-testid="ris"]').should('be.visible').contains('Позвонить').click();
  });

  it('Button "Share ad" test', () => {
    cy.get('[data-testid="estate-header-3"]').click();
  cy.get('[data-testid="share-dropdown-menu-block"]').contains('Скопировать ссылку').click()
  .then(() => {
    cy.window().then(win => {
      win.navigator.permissions.query({ name: 'clipboard-read' }).then(result => {
        if (result.state === 'granted' || result.state === 'prompt') {
          cy.readFile('clipboard').then(content => {
            expect(content).to.contain('https://new-marketplace.dev.centerhome.kz/');
          });
        }
      });
    });
  });
  });
});
