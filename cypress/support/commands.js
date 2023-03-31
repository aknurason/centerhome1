Cypress.Commands.add('openCenterHome', () => {
    cy.viewport(2136, 1060);
    cy.visit('https://new-marketplace.dev.centerhome.kz/');
    document.cookie = "cookieyes-consent=consentid:RDJ4QlY2czBiOVowc0hUR09vdHVMVGR3VXN6aU11YW4,consent:yes,action:yes,necessary:yes,functional:yes,analytics:yes,performance:yes,advertisement:yes,other:yes;path=/"
    // cy.get('.MuiPaper-root MuiPaper-elevation1 MuiPaper-rounded')
    //     .then(($btn) => {
    //         if ($btn.is(':visible')) {
    //             $btn.click();
    //         }
    //     })
    cy.get('[data-testid="header-geo-cities-dropdown"]').should('be.visible').contains('Актобе').click();
});

Cypress.Commands.add('reloadCenterHome',() =>{

        cy.viewport(1936, 960);
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

Cypress.Commands.add('filtersPriceFrom', () => {
    cy.get('[data-testid="rc-filter-price-box"]').click();
    cy.get('[data-testid="rc-filter-price-input"]').type('50000000');
    cy.get('[data-testid="searchFilterButton"]').click();
    cy.wait(2000);
    cy.get('[data-testid="price"]').then((elements) => {
               const randomIndex = Math.floor(Math.random() * elements.length);
           cy.get('[data-testid="price"]').eq(randomIndex).then(element => {  
                const price = parseInt(element.text(), 10);
               if (price >= 50) {
                 cy.log(`The price ${price} is more or equal to 50`);
               } else {
                 cy.log(`The price ${price} is less or equal than 50`);
                 throw new Error(`The price ${price} is less than 50`);
               }
            })
    })
    })

    Cypress.Commands.add('filtersPriceTo', () => {
    cy.get('[data-testid="rc-filter-price-box"]').click();
    cy.get('[data-testid="rc-filter-price-second-input"]').type('70000000');
    cy.get('[data-testid="searchFilterButton"]').click();
    cy.wait(2000);
    cy.get('[data-testid="price"]').then((elements) => {
               const randomIndex = Math.floor(Math.random() * elements.length);
           cy.get('[data-testid="price"]').eq(randomIndex).then(element => {  
                const price = parseInt(element.text(), 10);
               if (price <= 70) {
                 cy.log(`The price ${price} is less or equal to 70`);
               } else {
                 cy.log(`The price ${price} is more tham than 70`);
                 throw new Error(`The price ${price} is more than 70`);
               }
            })
        })
    })
   

Cypress.Commands.add('filtersHousingType', () => {

    cy.get('[data-testid="category1"]').click();
    cy.get('[data-testid="house-type-dropdown"]').should('be.visible').contains('Коммерческая').click();
    cy.get('[data-testid="house-type-dropdown"]').should('be.visible').contains('Офис').click();
    cy.get('[data-testid="searchFilterButton"]').click();
    cy.wait(2000);
    cy.get('[data-testid="estate-main-card"]').then(elements => {
       const length = elements.length;
       const randomIndex = Math.floor(Math.random() * length);
       cy.get('[data-testid="estate-main-card"]').eq(randomIndex).should('be.visible').click();
     });
    cy.get('[data-testid="[estate]-title"]').should('be.visible').contains('офис');


}
)


Cypress.Commands.add('filtersRoomNumber', () => {
cy.get('[data-testid="listRoomsFilter"]').click();
cy.get('[data-testid="rc-detailed-page-rooms-filter-second-toggle"]').should('be.visible').contains('3').click();
cy.get('[data-testid="searchFilterButton"]').click();
cy.wait(2000);
cy.get('[data-testid="estate-card-0"]').should('be.visible').contains('3');
})

Cypress.Commands.add('filtersDealType', () => {
    cy.get('[data-testid="CSelectDealType"]').click();
    cy.get('[data-testid="buy-rent-dropdown"]').should('be.visible').contains('Снять').click();
    cy.get('[data-testid="searchFilterButton"]').click();
    cy.url().should('eq', 'https://new-marketplace.dev.centerhome.kz/en/search?deal_type=rent&category_type=lodging');
}
)


Cypress.Commands.add('filtersPrice', () => {
cy.get('[data-testid="rc-filter-price-box"]').click();
cy.get('[data-testid="rc-filter-price-input"]').type('50000000');
cy.get('[data-testid="rc-filter-price-second-input"]').type('70000000');
 cy.get('[data-testid="searchFilterButton"]').click();
 cy.wait(2000);
 cy.get('[data-testid="price"]').then((elements) => {
     const randomIndex = Math.floor(Math.random() * elements.length);
 cy.get('[data-testid="price"]').eq(randomIndex).then(element => {  
      const price = parseInt(element.text(), 10);
     if (price >= 50 && price <= 70 ) {
       cy.log(`The price ${price} is between 50000000 && 70000000`);
     } else {
       cy.log(`The price ${price} is not between 50000000 && 70000000`);
       throw new Error(`The price ${price} is not between 50000000 && 70000000`);
     }
    }
    )
}
)}
)

Cypress.Commands.add('filtersClearPrice', () => {
  cy.get('[data-testid="rc-filter-price-box"]').click();
  cy.get('[data-testid="rc-filter-price-input"]').type('50000000');
  cy.get('[data-testid="rc-filter-price-second-input"]').type('70000000');
  cy.window().then(win => {
    win.scrollTo(0, 0);
  });
cy.get('[data-testid="home-page-filter-clear-price"]', {scrollBehavior: 'manual'})
.should('be.visible')
.contains('Очистить')
.click();
  cy.window().then(win => {
    win.scrollTo(0, 0);
  });
  cy.get(`[data-testid="rc-filter-price-input"]`).should('have.value','');
  cy.get(`[data-testid="rc-filter-price-second-input"]`).should('have.value','');
}
)


Cypress.Commands.add("scrollToTop", () => {
    cy.window().then(win => {
      win.scrollTo(0, 0);
    });
  });

Cypress.Commands.add("filtersLocation", () => {
    cy.get('[data-testid="map-icon"]').click();
    cy.get('[data-testid="header-geo-cities-dropdown"]').should('be.visible').contains('Актобе').click();
    cy.get('[data-testid="searchFilterButton"]').click();
    cy.get('[data-testid="estate-main-card"]').then(elements => {
        const length = elements.length;
        const randomIndex = Math.floor(Math.random() * length);
    cy.get('[data-testid="estate-main-card"]').eq(randomIndex).should('be.visible').click();
      });
    cy.get('[data-testid="[estate]-title"]').should('be.visible').contains('Актобе');

});



Cypress.Commands.add("filtersCheck", () => {
cy.get('[data-testid="CSelectDealType"]').click();
cy.get('[data-testid="buy-rent-dropdown"]').should('be.visible').contains('Купить').click();
cy.get('[data-testid="category1"]').click();
cy.get('[data-testid="house-type-dropdown"]').should('be.visible').contains('Жилье').click();
cy.get('[data-testid="house-type-dropdown"]').should('be.visible').contains('Квартира во вторичке').click();
cy.scrollToTop();
cy.get('[data-testid="listRoomsFilter"]').click();
cy.get('[data-testid="rc-detailed-page-rooms-filter-second-toggle"]').should('be.visible').contains('3').click();
cy.get('[data-testid="rc-filter-price-box"]').click();
cy.get('[data-testid="rc-filter-price-input"]').type('50000000');
cy.get('[data-testid="rc-filter-price-second-input"]').type('70000000');
cy.get('[data-testid="map-icon"]').click();
cy.get('[data-testid="header-geo-cities-dropdown"]').should('be.visible').contains('Актобе').click();
cy.get('[data-testid="searchFilterButton"]').click();
cy.wait(3000);
cy.get('[data-testid="estate-main-card"]').then(elements => {
    const length = elements.length;
    const randomIndex = Math.floor(Math.random() * length);
    cy.get('[data-testid="estate-main-card"]').eq(randomIndex).should('be.visible').click();
  });
 cy.get('[data-testid="[estate]-title"]').should('be.visible').contains('Продается квартира во вторичке');
 cy.get('[data-testid="[estate]-title"]').should('be.visible').contains('Актобе');
 cy.get('[data-testid="estate-apartment-price"]').then(element => {  
    const price = parseInt(element.text(), 10);
   if (price >= 50 && price <= 70 ) {
     cy.log(`The price ${price} is between 50000000 && 70000000`);
   } else {
     cy.log(`The price ${price} is not between 50000000 && 70000000`);
     throw new Error(`The price ${price} is not between 50000000 && 70000000`);
   }
  }
  )
 })


 //data-testid="estate-apartment-price"