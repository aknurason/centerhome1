describe('Test environment', () => {
  beforeEach(() => {
       cy.openCenterHome();
       cy.wait(7000);
  });


  it('Checking dropdown menu with select buttons "Купить" and "Снять"', () => {
    cy.get('[data-testid="dealType1"]').click();
    cy.get('[data-testid="dealType1"]').should('be.visible').contains('Снять').click();
    cy.get('[data-testid="searchFilterButton"]').click();
    cy.url().should('eq', 'https://new-marketplace.dev.centerhome.kz/search?deal_type=sale&category_type=lodging&order_by=date');
  })

  it('Checking dropdown button "Жилье" in filters', () => {
    cy.get('[data-testid="category1"]').click();
    cy.get('[data-testid="house-type-dropdown"]').should('be.visible').contains('Коммерческая').click();
    cy.get('[data-testid="house-type-dropdown"]').should('be.visible').contains('Офис').click();
    cy.get('[data-testid="searchFilterButton"]').click();
    cy.get('[data-testid="category1"]').should('include', 'Офис');
  })

  it('Checking dropdown button "Комнаты" in filters', () => {
    cy.get('[data-testid="listRoomsFilter"]').click();
    cy.get('[data-testid="rc-detailed-page-rooms-filter-second-toggle"]').should('be.visible').contains('3').click();
    cy.get('[data-testid="searchFilterButton"]').click();
    cy.get('[data-testid="listRoomsFilter"]').should('include', '3');
    cy.get('[data-testid="estate-card-0"]').should('include', '3');
  })
})

//it('Checking dropdown button "Цена" with "От" input in filters', () => {
  //cy.get('[id="button-price"]').click();
 // cy.get('[data-testid="rc-filter-price-input"]').type('10000000');
 // cy.get('[data-testid="searchFilterButton"]').click();
//napisat kod dlya proverki

  //it('Checking dropdown button "Цена" with "До" input in filters', () => {
   // cy.get('[id="button-price"]').click();
   // cy.get('[data-testid="rc-filter-price-second-input"]').type('90000000');
   // cy.get('[data-testid="searchFilterButton"]').click();
//napisat kod dlya proverki

    //it('Checking dropdown button "Цена" with both inputs in filters', () => {
     // cy.get('[id="button-price"]').click();
      //cy.get('[data-testid="rc-filter-price-input"]').type('10000000');
     // cy.get('[data-testid="rc-filter-price-second-input"]').type('90000000');
    //  cy.get('[data-testid="searchFilterButton"]').click();
//napisat kod dlya proverki


 //   })
 //   it('Checking dropdown button "Цена" with "Очистить" button', () => {
   //   cy.get('[data-testid="CButtonSelect"]').click();
    //  cy.get('[data-testid="rc-filter-price-input"]').type('10000000');
    //  cy.get('[data-testid="rc-filter-price-second-input"]').type('90000000');
    //  cy.get('[data-testid="home-page-filter-clear-price"]').click();
  //    cy.get(`[data-testid="rc-filter-price-input"]`).should('be.empty');
  //    cy.get(`[data-testid="rc-filter-price-second-input"]`).should('be.empty');
  //  })


    it('Checking location search in filters', () => {
      cy.get('[data-testid="GeoSearchBar"]').click();
      cy.get('[data-testid="data-testid="general-cities-dropdown"]').should('be.visible').type('Актобе').click();
      cy.get('[data-testid="home-filter-geo-choose-button"]').click();
      cy.get('[data-testid="searchFilterButton"]').click();
      //napisat kod dlya proverki

    })


    it('Checking everything in filters', () => {
      cy.get('[data-testid="dealType1"]').click();
      cy.get('[data-testid="dealType1"]').should('be.visible').contains('Снять').click();
      cy.get('[data-testid="house-type-dropdown"]').should('be.visible').contains('Коммерческая').click();
      cy.get('[data-testid="house-type-dropdown"]').should('be.visible').contains('Офис').click();
      cy.get('[data-testid="listRoomsFilter"]').click();
      cy.get('[data-testid="rc-detailed-page-rooms-filter-second-toggle"]').should('be.visible').contains('3').click();
      cy.get('[data-testid="CButtonSelect"]').click();
      cy.get('[data-testid="rc-filter-price-input"]').type('10000000');
      cy.get('[data-testid="rc-filter-price-second-input"]').type('90000000');
      cy.get('[data-testid="GeoSearchBar"]').click();
      cy.get('[data-testid="data-testid="general-cities-dropdown"]').should('be.visible').type('Актобе').click();
      cy.get('[data-testid="home-filter-geo-choose-button"]').click();
      cy.get('[data-testid="searchFilterButton"]').click();
//napisat kod dlya prverki


   // })

 // })
})


















