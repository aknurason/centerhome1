//подкорректировать как только исправят баг
import moment from 'moment'
describe('Test environment', () => {
  let date1String; // declare the alias here
  let date2String;
  let views1String; // declare the alias here
  let views2String;

  beforeEach(() => {
       cy.openCenterHome();
       cy.wait(2000);
       cy.clickBlogButton();
  });


  it('Sorting new articles', () => {
    cy.get('[data-testid="blog-sort-btn"]').should('be.visible').click();
    cy.get('[data-testid="blog-sort-dropwdown-btn-1"]').should('be.visible').click();
    cy.get('[data-testid="article-card-date-0"]').invoke('text').should('not.be.empty').as('date1String');
    cy.get('[data-testid="article-card-date-4"]').invoke('text').should('not.be.empty').as('date2String');
    const date1 = moment(date1String, 'DD MMMM YYYY');
    const date2 = moment(date2String, 'DD MMMM YYYY');
    expect(date1.isAfter(date2)).to.be.false;
  });


  it('Sorting old aricles', () => {
    cy.get('[data-testid="blog-sort-btn"]').should('be.visible').click();
    cy.get('[data-testid="blog-sort-dropwdown-btn-1"]').should('be.visible').click();
    cy.get('[data-testid="article-card-date-0"]').invoke('text').should('not.be.empty').as('date1String');
    cy.get('[data-testid="article-card-date-4"]').invoke('text').should('not.be.empty').as('date2String');
    const date1 = moment(date1String, 'DD MMMM YYYY');
    const date2 = moment(date2String, 'DD MMMM YYYY');
    expect(date2.isAfter(date1)).to.be.false;
  });


  // it('Sorting popular aricles', () => {
  //   cy.get('[data-testid="blog-sort-btn"]').should('be.visible').click();
  //   cy.get('[data-testid="blog-sort-dropwdown-btn-2"]').should('be.visible').click();
  //   cy.get('[data-testid="article-card-views-0"]').invoke('text').should('not.be.empty').as('views1String');
  //   cy.get('[data-testid="article-card-views-1"]').invoke('text').should('not.be.empty').as('views2String');
  //   // parseInt('views1String').text();
  //   // parseInt('views2String').text();
  //   const views1 = parseInt(Cypress.$('views1String').text);
  //   const views2 = parseInt(Cypress.$('views2String').text);

  //  expect(views2).to.be.greaterThan(views1);
  // });

  //для поиска статей написать тест
  






});

