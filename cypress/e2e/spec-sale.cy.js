
import moment from 'moment'
let date1String;  
let date2String;
describe('Test environment', () => {
  beforeEach(() => {
    cy.openCenterHome();
    cy.clickBuyButton();
  });


  it('Sorting Search (New First)', () => {
    
    cy.get('[data-testid="sort-button"]').click();
    cy.scrollToTop();
    cy.get('[data-testid="sort-button-drop-down"]').should('be.visible').contains('Сначала новые').click();
    cy.get('[data-testid="CIconWithText"]').eq(0).invoke('text').should('not.be.empty').as('date1String');
    cy.get('[data-testid="CIconWithText"]').eq(1).invoke('text').should('not.be.empty').as('date2String');
       const date1 = moment(date1String, 'DD MMMM');
       const date2 = moment(date2String, 'DD MMMM');
       expect(date1.isAfter(date2)).to.be.false;

  })


it('Sorting Search (Ascending Price)', () => {
    
    cy.get('[data-testid="sort-button"]').click();
    cy.scrollToTop();
    cy.get('[data-testid="sort-button-drop-down"]').should('be.visible').contains('По возрастанию цены').click();
    cy.get('[data-testid="price"]').eq(0).then($el1 => {
        const num1 = parseInt($el1.text().trim(), 10);  
        expect(num1).to.be.a('number'); 

    cy.get('[data-testid="price"]').eq(1).then($el2 => {
        const num2 = parseInt($el2.text().trim(), 10);  
        expect(num2).to.be.a('number');  
        expect(num2).to.be.greaterThan(num1);
        });
      });
    });


    it('Sorting Search (Descending Price)', () => {
    cy.get('[data-testid="sort-button"]').click();
    cy.scrollToTop();
    cy.get('[data-testid="sort-button-drop-down"]').should('be.visible').contains('По убыванию цены').click();
    cy.get('[data-testid="price"]').eq(0).then($el1 => {
          const num1 = parseInt($el1.text().trim(), 10);  
          expect(num1).to.be.a('number');  

          cy.get('[data-testid="price"]').eq(1).then($el2 => {
            const num2 = parseInt($el2.text().trim(), 10);  
            expect(num2).to.be.a('number');  
      
          
            expect(num1).to.be.greaterThan(num2);
      
        });
      });
    });
    });


    //napisat tests dlya mapa