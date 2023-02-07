// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('openCenterHome', () => {
    cy.viewport(1536, 960);
    cy.visit('https://new-marketplace.dev.centerhome.kz/');
    document.cookie = "cookieyes-consent=consentid:RDJ4QlY2czBiOVowc0hUR09vdHVMVGR3VXN6aU11YW4,consent:yes,action:yes,necessary:yes,functional:yes,analytics:yes,performance:yes,advertisement:yes,other:yes;path=/"
    cy.get('.MuiButtonBase-root.MuiButton-root.jss47.jss53.MuiButton-contained.MuiButton-containedPrimary.jss62.MuiButton-containedSizeSmall.MuiButton-sizeSmall.MuiButton-fullWidth')
        .then(($btn) => {
            if ($btn.is(':visible')) {
                $btn.click();
            }
        })

});

Cypress.Commands.add('reloadCenterHome',() =>{

        cy.viewport(1536, 960);
        cy.visit('https://new-marketplace.dev.centerhome.kz/');
        document.cookie = "cookieyes-consent=consentid:RDJ4QlY2czBiOVowc0hUR09vdHVMVGR3VXN6aU11YW4,consent:yes,action:yes,necessary:yes,functional:yes,analytics:yes,performance:yes,advertisement:yes,other:yes;path=/"

    }
)


Cypress.Commands.add('clickBuyButton', () => {
    cy.get('[data-testid="header-button-0"]').click().wait(5000);
});

Cypress.Commands.add('clickRentButton', () => {
    cy.get('[data-testid="header-button-1"]').click().wait(5000);
});

Cypress.Commands.add('clickRCButton', () => {
    cy.get('[data-testid="header-button-2"]').click().wait(5000);
});

Cypress.Commands.add('checkMortageButton', () => {
    cy.get('[data-testid="header-button-3"]').click()
    cy.url().should('include', 'https://www.bcc.kz/ipoteka/');

});

Cypress.Commands.add('clickBlogButton', () => {
    cy.get('[data-testid="header-button-4"]').click().wait(5000);
});

Cypress.Commands.add('checkLinkedinIcon', () => {
    cy.get('[data-testid="linkedin-icon"]').should('have.attr', 'href', 'https://www.linkedin.com/company/centerhome-kz/');
});

 Cypress.Commands.add('checkFacebookIcon', () => {
     cy.get('[data-testid="facebook-icon"]').should('have.attr', 'href', 'https://www.facebook.com/CenterHome-106890065258378/?ref=pages_you_manage');

 });

Cypress.Commands.add('checkInstagramIcon', () => {
    cy.get('[data-testid="instagram-icon"]').should('have.attr', 'href', 'https://www.instagram.com/centerhome.kz/?utm_medium=copy_link');

});

Cypress.Commands.add('checkAppStoreIcon', () => {
    cy.get('[data-testid="desktopAppStore-image"]').should('have.attr', 'href', 'https://apps.apple.com/kz/app/center-home/id1593535565');
});

Cypress.Commands.add('checkGooglePlayIcon', () => {
    cy.get('[data-testid="desktopGooglePlay-image"]').should('have.attr', 'href', 'https://play.google.com/store/apps/details?id=kz.bcc.chome');
});
                    
Cypress.Commands.add('checkAppGalleryIcon', () => {
    cy.get('[data-testid="desktopAppGalerry-image"]').should('have.attr', 'href', 'https://appgallery.huawei.com/app/C106609437');
});

Cypress.Commands.add('clickPublicOffer', () => {
    cy.get("a[href='/documents/contract']").click().wait(5000);
    cy.url().should('eq', 'https://new-marketplace.dev.centerhome.kz/documents/contract');
});

Cypress.Commands.add('clickUserAgr', () => {
    cy.get("a[href='/terms-of-use']").click().wait(5000);
    cy.url().should('eq', 'https://new-marketplace.dev.centerhome.kz/terms-of-use');
});

Cypress.Commands.add('clickAgency', () => {
    cy.get("a[href='/documents/agency']").click().wait(5000);
    cy.url().should('eq', 'https://new-marketplace.dev.centerhome.kz/documents/agency');
});


Cypress.Commands.add('reloadByIcon', () => {
cy.get('[data-testID="header-logo"]').click().wait(5000);
cy.url().should('eq', 'https://new-marketplace.dev.centerhome.kz/');
})



//data-testid="suggest-location-1"