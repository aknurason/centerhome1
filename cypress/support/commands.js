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

Cypress.Commands.add('checkTranslations', () => {
    cy.window().then((win) => {
        const translations = win.translations;
        Object.keys(translations).forEach((key) => {
            expect(translations[key]).to.not.be.empty;
        });
    });
});

Cypress.Commands.add('clickBuyButton', () => {
    cy.get('[data-testid="headerBtn1"]').click().wait(5000);
});

Cypress.Commands.add('clickRentButton', () => {
    cy.get('[data-testid="headerBtn2"]').click().wait(5000);
});

Cypress.Commands.add('clickRCButton', () => {
    cy.get('[data-testid="headerBtn3"]').click().wait(5000);
});

Cypress.Commands.add('clickMortageButton', () => {
    cy.get('[data-testid="headerBtn4"]').click().wait(5000);
});

Cypress.Commands.add('clickBlogButton', () => {
    cy.get('[data-testid="headerBtn5"]').click().wait(5000);
});

Cypress.Commands.add('clickLinkedinIcon', () => {
    cy.get('[data-testid="linkedin-icon"]');
    cy.url().should('eq', 'https://www.linkedin.com/company/centerhome-kz/');
    });

 Cypress.Commands.add('clickFacebookIcon', () => {
        cy.get('[data-testid="facebook-icon"]');
        cy.url().should('eq', 'https://www.facebook.com/people/CenterHome/100078435670705/?ref=pages_you_manage');
        });

Cypress.Commands.add('clickInstagramIcon', () => {
            cy.get('[data-testid="instagram-icon"]');
            cy.url().should('eq', 'https://www.instagram.com/centerhome.kz/?utm_medium=copy_link');
            });

Cypress.Commands.add('clickAppStoreIcon', () => {
                cy.get('[data-testid="desktopAppStore-image"]');
                cy.url().should('eq', 'https://apps.apple.com/kz/app/center-home/id1593535565');
                });

Cypress.Commands.add('clickGooglePlayIcon', () => {
                    cy.get('[data-testid="desktopGooglePlay-image"]');
                    cy.url().should('eq', 'https://play.google.com/store/apps/details?id=kz.bcc.chome&pli=1');
                    });             
                    //data-testid="desktopAppGalerry-image"
                    
Cypress.Commands.add('clickAppGalleryIcon', () => {
                        cy.get('[data-testid="desktopAppGalerry-image"]').click();
                        cy.url().should('eq', 'https://appgallery.huawei.com/app/C106609437');
                        });


Cypress.Commands.add('clickPublicOffer', () => {
    cy.get("a[href='/documents/contract']").click();
    cy.url().should('eq', 'https://new-marketplace.dev.centerhome.kz/documents/contract');
});

Cypress.Commands.add('clickUserAgr', () => {
    cy.get("a[href='/terms-of-use']").click();
    cy.url().should('eq', 'https://new-marketplace.dev.centerhome.kz/terms-of-use');
});

Cypress.Commands.add('clickAgency', () => {
    cy.get("a[href='/documents/agency']").click();
    cy.url().should('eq', 'https://new-marketplace.dev.centerhome.kz/documents/agency');
});



Cypress.Commands.add('reloadByIcon', () => {
cy.get('[data-testID="logo"]');
cy.url().should('eq', 'https://new-marketplace.dev.centerhome.kz/');
})