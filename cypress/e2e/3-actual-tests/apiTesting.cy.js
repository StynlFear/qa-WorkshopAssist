describe('API Testing with Cypress', () => {
    it('GET - Fetch Posts', () => {
        cy.request(`${Cypress.config().baseUrl}/posts`)
            .should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
                expect(response.body.length).to.be.greaterThan(0);
            });
    });

});

describe('Negative API Testing', () => {
    it('GET - Fetch Non-Existent Resource', () => {
        cy.request({
            method: 'GET',
            url:`${Cypress.config().baseUrl}/nonexistent`,
            failOnStatusCode: false // Prevent Cypress from failing the test on 404
        }).should((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.be.empty;
        });
    });
});
describe('api Testing with Post Request', () => {  
    it('POST - Create a New Post', () => {
        const newPost = {
            title: 'foo',
            body: 'bar',
            userId: 1
        };

        cy.request({
            method: 'POST',
            url: `${Cypress.config().baseUrl}/posts`,
            body: newPost
        }).should((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.include(newPost);
        });
    });
});

