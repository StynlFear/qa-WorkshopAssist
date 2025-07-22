import GoogleSearchPage from '../../support/GoogleSearchPage';
import googleSearchPage from '../../support/GoogleSearchPage';

describe('Google Search Tests', () => {
    it('should search for a query and show results', () => {
        GoogleSearchPage.visit();
        GoogleSearchPage.typeSearchQuery('Cypress testing framework');
        GoogleSearchPage.submitSearch();
        GoogleSearchPage.getResults().should('be.visible');
    });
});
