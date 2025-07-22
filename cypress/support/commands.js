// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('login', (username, password) => {
  cy.request({
    method: 'POST',
    url: 'https://dummyjson.com/auth/login',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      username,
      password,
      expiresInMins: 30
    }
  }).then((response) => {
    cy.log(JSON.stringify(response.body)); // See full response

    // Sanity check
    expect(response.status).to.eq(200);
    expect(response.body.accessToken).to.exist;

    // Store token
    window.localStorage.setItem('authToken', response.body.accessToken);
    window.localStorage.setItem('refreshToken', response.body.refreshToken);
  });
});

Cypress.Commands.add('refresh', (refreshToken) => {
  cy.request({
    method: 'POST',
    url: 'https://dummyjson.com/auth/refresh',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      refreshToken: Cypress.env('refreshToken'), // Use the refresh token from environment variables
      expiresInMins: 30 // optional
    }
    // `credentials: 'include'` equivalent is handled automatically by Cypress cookies if needed
  }).then((response) => {
    cy.log('Refreshed:', JSON.stringify(response.body));

    expect(response.status).to.eq(200);

    // Store the new token
    window.localStorage.setItem('authToken', response.body.accessToken);
  });
});


// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })