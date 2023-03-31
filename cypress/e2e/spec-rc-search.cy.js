/// <reference types="cypress" />n

describe('Test environment', () => {
  beforeEach(() => {
    cy.openCenterHome();
    cy.clickRCButton();
  });


  it('проверка поиска ЖК по городу', () => {
    
      cy.get('[data-testid="rc-filter-city-input"]').click();
      cy.get('[data-testid="rc-filter-city-input"]').should('be.visible').type('Алматы').click();
      cy.get('[data-testid="rc--search-button"]').click();
      cy.get('[data-testid="residential-complex-card"]').then(elements => {
        const length = elements.length;
        const randomIndex = Math.floor(Math.random() * length);
        cy.get('[data-testid="residential-complex-card"]').eq(randomIndex).should('be.visible').contains('Алматы');
      });
      
  })

  it('проверка поиска ЖК по застройщику', () => {
    cy.get('[data-testid="rc-filter-city-input"]').click();
    cy.get('[data-testid="rc-filter-city-input"]').should('be.visible').type('Orda Invest').click();
    cy.get('[data-testid="rc--search-button"]').click();
   // cy.get('[data-testid="residential-complex-card"]').eq(0).should('be.visible').contains('Orda Invest');
    })
    
    it('проверка поиска ЖК по названию', () => {
    
      cy.get('[data-testid="rc-filter-city-input"]').click();
      cy.get('[data-testid="rc-filter-city-input"]').should('be.visible').type('Slug5').click();
      cy.get('[data-testid="rc--search-button"]').click();
     // cy.get('[data-testid="residential-complex-card"]').eq(0).should('be.visible').contains('Slug5');
      })

      it('проверка поиска ЖК по класссу', () => {
       cy.get('[data-testid="rc-filter-block"]').should('be.visible').contains('Класс').click();
       cy.get('[data-testid="rc-filter-class-button-dropdown"]').should('be.visible').contains('Элит').click();
       cy.get('[data-testid="rc--search-button"]').eq(0).click();
       cy.get('[data-testid="residential-complex-card"]').then(elements => {
        const length = elements.length;
        const randomIndex = Math.floor(Math.random() * length);
        cy.get('[data-testid="residential-complex-card"]').eq(randomIndex).should('be.visible').click();
      // попросить добавить дата атрибут для информации о жк
      //  cy.get('[data-testid="CAdvertDetails"]').should('be.visible').contains('Элит');
      });
    })


  it('проверка поиска ЖК по цене', () => {
    cy.get('[data-testid="rc-filter-price-button"]').should('be.visible').click();
    cy.get('[data-testid="rc-filter-price-input"]').should('be.visible').type('22222222');
    cy.get('[data-testid="rc-filter-price-second-input"]').should('be.visible').type('44444444');
    cy.get('[data-testid="rc--search-button"]').eq(0).click();
  //  cy.wrap('').then(value => {
  //     if (value > '22222222' && value < '44444444') {
  //     cy.log(`${value} is greater than 22222222 and less than 44444444`);
  //     } else {
  //     cy.log(`${value} is not between 22222222 and 44444444`);
  //   }
  //  });
    

    it('полная проверка поиска ЖК', () => {

      cy.get('[data-testid="rc-filter-city-input"]').click();
      cy.get('[data-testid="rc-filter-city-input"]').should('be.visible').type('Алматы').click();
      cy.get('[data-testid="rc-filter-block"]').should('be.visible').contains('Класс').click();
      cy.get('[data-testid="rc-filter-class-button-dropdown"]').should('be.visible').contains('Комфорт').click();

      cy.get('[data-testid="rc-filter-price-button"]').eq(0).should('be.visible').click();
      cy.get('[data-testid="rc-filter-price-input"]').should('be.visible').type('22222222');
      cy.get('[data-testid="rc-filter-price-second-input"]').should('be.visible').type('44444444');
      cy.get('[data-testid="rc--search-button"]').eq(0).click();

      });



     })
    })
















