describe('Test environment', () => {
  //afterEach(() => {
 //   cy.openCenterHome();
//    cy.wait(7000);
 // });
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