describe('Wiki Search API Testing', () => {
   
    it('Search on the wiki page', () => {
        const baseurl = 'https://en.wikipedia.org/';
        cy.visit(`${baseurl}`);
        cy.get('#p-search > .cdx-button--fake-button > .vector-icon').click();
        cy.get('#searchform ').type('Romania');
        cy.get('#searchform > .cdx-search-input > .cdx-button').click();
        cy.get('#firstHeading ').should('contain', 'Romania');
    });
}); 
describe(`Search for non-existent page`, () => {
    it.only('Search for a non-existent page', () => {
        const baseurl = 'https://en.wikipedia.org/';
        cy.visit(`${baseurl}`);
         cy.get('#p-search > .cdx-button--fake-button > .vector-icon').click();
        cy.get('#searchform ').type('NonExistentPage');
        cy.get('#searchform > .cdx-search-input > .cdx-button').click();
        cy.get('body').should('contain.text', 'does not exist.');
    });
});

