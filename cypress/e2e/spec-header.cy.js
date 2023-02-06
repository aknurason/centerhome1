/// <reference types="cypress" />n
describe('Test environment', () => {
  beforeEach(() => {
    cy.viewport(1536, 960);
    cy.visit('https://new-marketplace.dev.centerhome.kz/');
    //cy.get('[data-testid="CButton"]').eq(1).click()
  });


  it('checking map icon', () => {
    cy.get('[data-testid="map-icon"]').click();
    cy.get('div [class="MuiPaper-root MuiDialog-paper jss2 MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiPaper-elevation24 MuiPaper-rounded"]').should('be.visible').contains('Актобе').click();
    //cy.get('[data-testid="GeoSearchBar"]').should('have.text', 'Актобе');
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

    cy.clickMortageButton();
    cy.url().should('eq', 'https://www.bcc.kz/ipoteka/');

    cy.clickBlogButton();
    cy.url().should('eq', 'https://new-marketplace.dev.centerhome.kz/blog');

    cy.reloadByIcon();

  });







});

