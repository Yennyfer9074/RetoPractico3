describe('Cart feature', () => {
    beforeEach(() => {
        cy.visit('http://www.testingyes.com/onlineshop');
        cy.get('[href="http://www.testingyes.com/onlineshop/6-accessories"]').click();
        cy.get('.ui-autocomplete-input').click();
        cy.get('.ui-autocomplete-input').type('Mountain').click();
    });
    it('TC-002: FE Search the product category Accessories', () => {

        cy.get('#ui-id-2').should('be.visible');
        cy.wait(2000);
        cy.screenshot();
    });

    it('TC-003: FE Select and add new product to cart', () => {

        cy.get('#ui-id-2').click();
        cy.get('.bootstrap-touchspin-up > .material-icons').click();
        cy.get('.add > .btn').click();
        cy.get('.cart-content-btn > .btn-primary').click();
        cy.screenshot();
    });
    it('TC-004: FE Search the product category Clothes', () => {

        cy.get('#contact-link > a').click();
        cy.screenshot();
    });

});