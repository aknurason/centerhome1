describe('Mortgage Calculator', () => {
  let creditAmount;
  beforeEach(() => {
    cy.openCenterHome();
    cy.clickBuyButton();
    cy.get('[data-testid="estate-main-card"]').eq(0).click();
    cy.wait(4000);

  })

  it('calculates mortgage information based on user input', () => {
    const p = 7;
    cy.get('[data-testid="creditAmount"]')
  .invoke('text')
  .then((text) => {
    sumk = text;
  });

    const pv = 200000;
    const t = 240;
    const sudk = 0;
    const sum = sumk - pv;
    const ep = sum * t * p / 1200 / (1 + (1 / ((1 + p / 1200) ** t - 1))) / t;
    const per = ep * t - sum;
    const fsd = per / sum / t * 12 * 100;

    cy.get('[data-testid="loanTerm"]').should('be.visible').clear();
    cy.get('[data-testid="loanTerm"]').should('be.visible').click().type(t);

    cy.get('[data-testid="initialFee"]').should('be.visible').clear();
    cy.get('[data-testid="initialFee"]').should('be.visible').click().type(pv);



// Use Cypress to get the element with the data-testid attribute set to "creditAmount"
cy.get('[data-testid="creditAmount"]')
  .invoke('text')
  .then((text) => {
    sumk = text;
  });






    // cy.get('[data-testid="creditAmount"]').should('have.value', sum);
    // cy.get('[data-testid="monthly-payment-block-amount"]').should('have.text', `$${ep.toFixed(2)}`);
    // cy.get('[data-testid="total-payment-block-amount"]').should('have.text', `$${(ep * t).toFixed(2)}`);
    // cy.get('[data-testid="interest-paid-block-amount"]').should('have.text', `$${per.toFixed(2)}`);
    // cy.get('[data-testid="annual-percentage-rate-block-amount"]').should('have.text', `${fsd.toFixed(2)}%`);
  })
})


