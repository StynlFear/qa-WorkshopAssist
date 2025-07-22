import  OrangeLoginPage  from '../../support/OrangeLoginPage';
describe('OrangeHRM Login', () => {
  it('should login with valid credentials', () => {
    OrangeLoginPage.visit();
    OrangeLoginPage.fillUsername('Admin');
    OrangeLoginPage.fillPassword('admin123');
    OrangeLoginPage.submit();

    // Add assertions to verify successful login
  });

  it('should show error message for invalid credentials', () => {
    OrangeLoginPage.visit();
    OrangeLoginPage.fillUsername('InvalidUser');
    OrangeLoginPage.fillPassword('InvalidPass');
    OrangeLoginPage.submit();

    // Add assertions to verify error message
  });
    it('should show error message for empty credentials', () => {
        OrangeLoginPage.visit();
        OrangeLoginPage.fillUsername2('');
        OrangeLoginPage.fillPassword2('');
        OrangeLoginPage.submit();
    
        // Add assertions to verify error message
    });
});
