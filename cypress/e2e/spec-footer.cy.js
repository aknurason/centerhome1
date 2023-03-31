describe('Test environment', () => {

  it('clicking all footer buttons', () => {

    cy.openCenterHome();

    cy.checkLinkedinIcon();

    cy.checkFacebookIcon();

    cy.checkInstagramIcon();

    cy.checkAppGalleryIcon();

    cy.checkGooglePlayIcon();

    cy.checkAppStoreIcon();

    cy.clickPublicOffer();

    cy.clickUserAgr();

    cy.clickAgency();


  })
});