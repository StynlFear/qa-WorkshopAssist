import OrangeEmployeeADD from '../../support/OrangeEmployeePage';
import  OrangeLoginPage  from '../../support/OrangeLoginPage';
describe('OrangeHRM Employee Tests', () => {
    it('should add a new employee', () => {
        OrangeLoginPage.visit();
            OrangeLoginPage.fillUsername('Admin');
            OrangeLoginPage.fillPassword('admin123');
            OrangeLoginPage.submit(); 
             cy.wait(4000); // Wait for the page to load
        OrangeEmployeeADD.visit();
        cy.wait(2000); // Wait for the page to load
        OrangeEmployeeADD.clickAddEmployee();

        
        OrangeEmployeeADD.clickUserRoleDropdown();
        
        OrangeEmployeeADD.clickStatusDropdown();
        OrangeEmployeeADD.searchAndSelectEmployee();
        
        OrangeEmployeeADD.typeUserNameMihai();
        OrangeEmployeeADD.typePasswordFields();
        
        OrangeEmployeeADD.saveButton().click();

        // Add assertions to verify the employee was added successfully
    });
    it('should search and select an employee', () => {
        OrangeLoginPage.visit();
        OrangeLoginPage.fillUsername('Admin');
        OrangeLoginPage.fillPassword('admin123');
        OrangeLoginPage.submit(); 
        cy.wait(4000); // Wait for the page to load
        OrangeEmployeeADD.visit();
        cy.wait(2000); // Wait for the page to load
        OrangeEmployeeADD.searchAndSelectEmployee('Ranga', 'Ranga');
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();

        // Add assertions to verify the employee was selected successfully
    });
    it("should delete all users it finds", () => {
        OrangeLoginPage.visit();
        OrangeLoginPage.fillUsername('Admin');
        OrangeLoginPage.fillPassword('admin123');
        OrangeLoginPage.submit(); 
        cy.wait(4000); // Wait for the page to load
        OrangeEmployeeADD.visit();
        cy.wait(2000); // Wait for the page to load
        OrangeEmployeeADD.searchAndSelectEmployee('Ranga', 'Ranga');
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();
        cy.get('.oxd-table-cell-actions > :nth-child(1)').each(($btn, index, $list) => {
  cy.wrap($btn).click();
  cy.get('.oxd-button--label-danger').click();
  cy.wait(4000); // Wait after each delete
});

        // Add assertions to verify the employee was deleted successfully
    });
});