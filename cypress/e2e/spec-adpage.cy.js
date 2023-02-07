/// <reference types="cypress" />n

describe('Test environment', () => {
  beforeEach(() => {
    cy.reloadCenterHome();
    cy.get('[data-testid="estate-main-card"]').eq(0).click();
  });


  it('Button "Call"', () => {
    cy.get('[data-testid="ris"]').should('be.visible').contains('Позвонить').click();
  });
})

it('Button "Share ad"', () => {
  cy.get('[data-testid="estate-header-3"]').should('be.visible').click();
  cy.get('[data-testid="share-dropdown-menu-block"]').should('be.visible').contains('Поделиться ссылкой').click();


})

