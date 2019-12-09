const loginPageTitle = 'Hotel Accomodation - login page'
const loginFormLabel = 'Please, login!'
const loginTextField = '#login'                     //login selectors
const passwordTextField = '#senha'
const loginFormButton = '#loginBtn'

function checkLoginPageTitle(cy){
    cy.title().should('eq', loginPageTitle)
}

function performLogin(cy, username, password){
    cy.contains(loginFormLabel)
    cy.get(loginTextField).type(username)           //login function
    cy.get(passwordTextField).type(password)
    cy.get(loginFormButton).click()
}

module.exports = {
    performLogin,
    checkLoginPageTitle
}