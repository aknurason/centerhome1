import Login from "../integration/PageObject/LoginPage.js"
describe('LoginPOM', () => {
  it.only('LoginTest',() =>{
    cy.viewport(1536, 960);
    cy.visit('https://centerhome.kz/login');


    const ln=new Login();
    ln.setPhoneNumber("+77028531477");
    ln.clickContinue();
    cy.wait(7000);
    ln.setPassword("Test12345");
    ln.clickContinueAgain();

    ln.verifyLogin();

  })
})
