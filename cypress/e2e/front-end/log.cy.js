describe('Log Feature', () => {
    it('TC-001: FE Sig in successfull', () => {
        cy.visit('http://www.testingyes.com/onlineshop');
        cy.get('a > .hidden-sm-down').click();
        cy.get('.col-md-6 > .form-control').type('yennyferlsanchezr@gmail.com');
        cy.get('.input-group > .form-control').type('Juana9074*');
        cy.get('#submit-login').click();
        cy.screenshot;
    });
    it('TC-005: FE Sig out successfull', () => {
        cy.visit('http://www.testingyes.com/onlineshop');
        cy.get('a > .hidden-sm-down').click();
        cy.get('.col-md-6 > .form-control').type('yennyferlsanchezr@gmail.com');
        cy.get('.input-group > .form-control').type('Juana9074*');
        cy.get('#submit-login').click();
        cy.get('.logout').click();
        cy.wait(2000);        
        cy.screenshot;
    });
});