/// <reference types="cypress" />
describe('Test environment', () => {
    it('chtoeto', () => {
        cy.viewport(1536, 960);
        cy.visit('https://new-marketplace.dev.centerhome.kz/search?deal_type=sale&category_type=lodging&order_by=date');
        cy.get('[data-testid="CButtonSelect"]').click();
        cy.get('[data-test="sentinelEnd"]').should('be.visible').contains('Сначала новые').click();









    });
    })