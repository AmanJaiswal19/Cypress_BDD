import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given("Visit orange HRM Site", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})
And('Fill the username', () => {
    cy.get('input[name="username"]').type('Admin')
})
And('Fill the password', () => {
    cy.get('input[name="password"]').type('admin123')
})
When('Click on login button', () => {
    cy.get('button[type="submit"]').click()
})
Then('Validate the Dashbord text', () => {
    cy.contains('Dashboard').should('be.visible')
})


Given("Visit orange HRM Site", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})
And('Fill the username and password', (dataTables) => {

    And('Fill the usernames', () => {
        cy.get('input[name="username"]').type('Admin')
    })

    And('Fill the passwords', () => {
        cy.get('input[name="password"]').type('admin')
    })

    When('Click on login buttons', () => {
        cy.get('button[type="submit"]').click()
    })

    Then('Validate the Error Message', () => {
        cy.get('#spanMessage').should('have.text', 'Invalid credentials')
    })
})