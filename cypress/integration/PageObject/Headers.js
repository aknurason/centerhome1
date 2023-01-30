class Header {
    reloadByLogo(){
        cy.get('[data-testid="CButton"]').eq(1).click()
        cy.get('[data-testID="logo"]');
        cy.url().should('eq', 'https://new-marketplace.dev.centerhome.kz/');
    }



}
export default Header;