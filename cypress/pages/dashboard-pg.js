const dashboardPageTitle = 'Dashboard'

const menuClient = '#side-menu > li:nth-child(5) > a'
const menuUser = '#side-menu > li:nth-child(7) > a'         //menu navigation

const logoutToggleDropdown = '.dropdown-toggle'
const logoutToggleDropdownButton = '.dropdown-menu > li > a'    //logout

function checkDashboardPageTitle(cy){
    cy.title().should('eq', dashboardPageTitle)
}

function navigateClient(cy){
    cy.get(menuClient).click()
}

function navigateUser(cy){
    cy.get(menuUser).click()
}

function performLogout(cy){
    cy.get(logoutToggleDropdown).click()
    cy.get(logoutToggleDropdownButton).click()          //logout
}

module.exports = {
    checkDashboardPageTitle,
    navigateClient,
    navigateUser,
    performLogout
}