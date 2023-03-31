describe('Test environment', () => {
  beforeEach(() => {
       cy.openCenterHome();
       cy.wait(2000);
  });


  it('Checking dropdown menu with select buttons "Купить" and "Снять"', () => {
    cy.filtersDealType();
  })

  it('Checking dropdown menu with select button "Housing"', () => {
    cy.filtersHousingType();
  })

  it('Checking dropdown menu with select button "Rooms"', () => {
    cy.filtersRoomNumber();
  })

  it('Checking dropdown menu with select button "Price"', () => {
    cy.filtersPriceFrom();
    cy.reloadCenterHome();
    cy.filtersPriceTo();
    cy.reloadCenterHome();
    cy.filtersPrice();
    cy.reloadCenterHome();
    cy.filtersClearPrice();
  })
 
    it('Checking location search in filters', () => {
      cy.filtersLocation();
    })


    it('Checking everything in filters', () => {
      cy.filtersCheck();


   })
})