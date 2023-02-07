/// <reference types="cypress" />n

describe('Test environment', () => {
  beforeEach(() => {
   cy.openCenterHome();
  });


  it('checking map icon', () => {
    cy.get('[data-testid="map-icon"]').click();
    cy.get('[data-testid="header-geo-cities-dropdown"]').should('be.visible').contains('Актобе').click();
   // cy.get('[data-testid="GeoSearchBar"]').should('have.text', 'Актобе');
    cy.get('[data-testid="map-icon"]').click();
    cy.get('[data-testID="close-map"]').should('be.visible').click();

  });

  it('clicking all header buttons', () => {
    cy.clickBuyButton();
    cy.url().should('eq', 'https://new-marketplace.dev.centerhome.kz/search?deal_type=sale&category_type=lodging&order_by=date');

    cy.clickRentButton();
     cy.url().should('eq', 'https://new-marketplace.dev.centerhome.kz/search?deal_type=rent&category_type=lodging&order_by=date');

    cy.clickRCButton();
    cy.url().should('eq', 'https://new-marketplace.dev.centerhome.kz/search?deal_type=catalog&order_by=date');

    cy.clickBlogButton();
    cy.url().should('eq', 'https://new-marketplace.dev.centerhome.kz/blog');

    //cy.checkMortageButton();

    cy.reloadCenterHome();

    cy.reloadByIcon();

  });



//написать тест для локализации




});

