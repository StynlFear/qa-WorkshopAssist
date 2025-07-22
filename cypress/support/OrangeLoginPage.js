class OrangeLoginPage {
  visit() {
   cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  }

  fillUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }
  fillPassword2(password) {
    cy.get('input[name="password"]').clear();
  }
  fillUsername2(username) {
    cy.get('input[name="username"]').clear();
  }
  submit() {
    cy.get('button[type="submit"]').click();
  }
}

export default new OrangeLoginPage();
