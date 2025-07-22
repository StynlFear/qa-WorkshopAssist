class DuckDuckGoSearchPage {
  visit() {
    cy.visit('https://duckduckgo.com');
  }

  getSearchBox() {
    return cy.get('#searchbox_input')
  }

  typeSearchQuery(query) {
    this.getSearchBox().type(query);
  }

  submitSearch() {
    this.getSearchBox().type('{enter}');
  }

  getResults() {
    return cy.get(':nth-child(1) > [data-testid="result"]')
  }
}

export default new DuckDuckGoSearchPage();
