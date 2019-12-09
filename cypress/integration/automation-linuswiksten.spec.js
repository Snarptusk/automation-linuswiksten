import * as loginFuncs from '../pages/index-pg'
import * as dashboardFuncs from '../pages/dashboard-pg'
import * as clientFuncs from '../pages/client-pg'
import * as userFuncs from '../pages/user-pg'

describe('project', function(){
    beforeEach(()=>{
        cy.visit('http://localhost:8080/hotel/faces/login/login.xhtml')
        loginFuncs.checkLoginPageTitle(cy)
    })

    it('Perform login and logout', function(){
        loginFuncs.performLogin(cy, 'jp', '1010')
        dashboardFuncs.checkDashboardPageTitle(cy)
        dashboardFuncs.performLogout(cy)
        loginFuncs.checkLoginPageTitle(cy)
    })

    it('Create Client', function(){
        loginFuncs.performLogin(cy, 'jp', '1010')
        dashboardFuncs.navigateClient(cy)
        clientFuncs.createClient(cy)
    })

    it('View Client', function(){
        loginFuncs.performLogin(cy, 'jp', '1010')
        dashboardFuncs.navigateClient(cy)
        clientFuncs.viewClient(cy)
    })

    it('Edit Client', function(){
        loginFuncs.performLogin(cy, 'jp', '1010')
        dashboardFuncs.navigateClient(cy)
        clientFuncs.editClient(cy)
    })

    it('Delete Client', function(){
        loginFuncs.performLogin(cy, 'jp', '1010')
        dashboardFuncs.navigateClient(cy)
        clientFuncs.deleteClient(cy)
    })

    it('Create User', function(){
        loginFuncs.performLogin(cy, 'marc', '1010')
        dashboardFuncs.navigateUser(cy)
        userFuncs.createUser(cy)
    })
})