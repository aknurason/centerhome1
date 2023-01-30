describe('Test environment', () => {
  beforeEach(() => {
    cy.viewport(2136, 960);
    cy.visit('https://new-marketplace.dev.centerhome.kz/');
  });


  it('Should open the dropdown menu with select buttons "Купить" and "Снять"', () => {
    cy.get('[data-selenium="dealType1"]').click();
    cy.get('[data-selenium="dealType1"]').should('be.visible').contains('Купить').click();


    //тут будет команда для клика на кнопку поиск, пока без дата атрибута не работает
    //cy.contains('Поиск').then(($btn) => {
    // const btnSelector = $btn[0].className
    // console.log(btnSelector)
    // cy.get(`.${btnSelector}`).click()

    // cy.url().should('eq', 'https://new-marketplace.dev.centerhome.kz/search?deal_type=sale&category_type=lodging&order_by=date');
    cy.get('[data-selenium="category1"]').click();
    cy.get('[data-selenium="categoryTab"]').should('be.visible').contains('Коммерческая').click();
    cy.get('[data-selenium="priceFilter"]').click();
    cy.get('[data-selenium="priceFilterFrom"]').type('10000000');
    cy.get('[data-selenium="priceFilterTo"]').type('90000000');
    cy.xpath("//input[@id='GeoSearchInput']").type('Алматы')
    cy.wait(10000)
    cy.xpath("(//div[@role='tooltip'])[1]").contains("Алматы").click()
    // cy.xpath("//div[@class='MuiBox-root jss638 jss633 jss634']").click()
    //cy.get('[data-testid="CButton"]').contains("Выбрать").click()

    cy.get('[data-testid="CButton"]').eq(15).click()

  })
})
//data-testid="CButton"




