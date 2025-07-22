    describe('API Testing with Dummy JSON', () => {
    it("should login with valid credentials", () => {
            cy.login('emilys', 'emilyspass');
        });
    it("refresh auth session", () => {
        cy.login('emilys', 'emilyspass');
        const refreshToken = Cypress.env('refreshToken');
        cy.refresh(refreshToken);
        
    });
    });
