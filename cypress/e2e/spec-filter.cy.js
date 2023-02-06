describe('Test environment', () => {
  beforeEach(() => {
       cy.openCenterHome();
       cy.wait(7000);
  });


  it('Checking dropdown menu with select buttons "Купить" and "Снять"', () => {
    cy.get('[data-testid="dealType1"]').click();
    cy.get('[data-testid="dealType1"]').should('be.visible').contains('Снять').click();
    cy.get('//testid poiska//').click();
    cy.url().should('eq', 'https://new-marketplace.dev.centerhome.kz/search?deal_type=sale&category_type=lodging&order_by=date');
  })
  it('Checking dropdown button "Жилье" in filters', () => {
    cy.get('[data-testid="category1"]').click();
    cy.get('[data-testid="house-type-dropdown"]').should('be.visible').contains('Коммерческая').click();
    cy.get('[data-testid="house-type-dropdown"]').should('be.visible').contains('Офис').click();
    cy.get('//testid poiska//').click();
    cy.get('[data-testid="category1"]').should('include', 'Офис');
  })

  it('Checking dropdown button "Комнаты" in filters', () => {
    cy.get('[data-testid="listRoomsFilter"]').click();
    cy.get('[data-testid="rc-detailed-page-rooms-filter-second-toggle""]').should('be.visible').contains('3').click();

  })
})












      //cy.get('[data-selenium="priceFilterFrom"]').type('10000000');
      //cy.get('[data-selenium="priceFilterTo"]').type('90000000');

//data-testid="CButton"




