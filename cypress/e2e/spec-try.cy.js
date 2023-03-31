describe('Test environment', () => {
    beforeEach(() => {
     
          
         cy.reloadCenterHome();
         cy.wait(2000);
    });
  
     it('Checking dropdown button "Цена" with "От" input in filters', () => {



    cy.filtersCheck();
     })
});


