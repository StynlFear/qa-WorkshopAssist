class OrangeEmployeeADD
{
    visit = () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    }
    addEmployeeButton = () => cy.get('.orangehrm-header-container > .oxd-button')
    saveButton = () => cy.get('.oxd-button--secondary');

    clickAddEmployee = () => {
        this.addEmployeeButton().click();
    }
    userRoleDropdown = () => cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').contains('-- Select --');

    clickUserRoleDropdown = () => {
        this.userRoleDropdown().click();
        cy.get('.oxd-select-option').contains('Admin').click();
        
    }
    statusDropdown = () => cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').contains('-- Select --');

    clickStatusDropdown = () => {
        this.statusDropdown().click();
        cy.get('.oxd-select-option').contains('Enabled').click();
        
    }
    employeeNameInput = () => cy.get('input[placeholder="Type for hints..."]');

    typeEmployeeName = (text) => {
        this.employeeNameInput().type(text);
    }

    employeeNameOption = (name) => cy.get('body').contains(name);

    searchAndSelectEmployee = () => {
        cy.get('.oxd-autocomplete-text-input > input').type('Ranga');
        cy.get('.oxd-autocomplete-dropdown').should('be.visible');
        cy.get('.oxd-autocomplete-dropdown').contains('Ranga').click();
    }

    
    userNameInput = () => cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input')

    typeUserName = (username) => {
        this.userNameInput().type(username);
    }

    typeUserNameMihai = () => {
        this.typeUserName('Mihai');
    }
    passwordInput = () => cy.get('input[type="password"]').eq(0);
    confirmPasswordInput = () => cy.get('input[type="password"]').eq(1);

    typePassword = (password) => {
        this.passwordInput().type(password);
    }

    typeConfirmPassword = (password) => {
        this.confirmPasswordInput().type(password);
    }

    typePasswordFields = () => {
        this.typePassword('admin123');
        this.typeConfirmPassword('admin123');
    }
}
export default new OrangeEmployeeADD;