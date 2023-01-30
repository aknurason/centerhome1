class Login {
    navigate(){
        cy.viewport(1536, 960);
        cy.visit('https://centerhome.kz/login');
    }
    setPhoneNumber(phonenumber){
        cy.get('#TLoginForm-mobilePhone').type(phonenumber);
    }

    clickContinue(){
        cy.get('button[type="button"]').click()   }

    setPassword(password){
        cy.get('input[name="password"]').type(password)
    }

    clickContinueAgain(){
        cy.get('[data-testid="TLoginForm-button-login"]').click()
    }

    verifyLogin(){
        cy.get('[data-testid="CAvatar-label"]').should('have.text','Testella Test')
    }


}
export default Login;