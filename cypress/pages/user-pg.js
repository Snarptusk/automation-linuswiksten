const userCreate = '#j_idt50 > a.btn.btn-primary'
const userSave = '#j_idt51 > a.btn.btn-primary'                     //button selectors
const userDelete = '#j_idt50 > table > tbody > tr:nth-child(6) > td:nth-child(7) > a:nth-child(3)'

const userType = '#typeUser'
const userLogin = '#login'
const userPassword = '#password'                            //form inputs for user creation
const userPasswordRepeat = '#retypingPassword'
const userClient = '#clientId'
const userStatus = '#userStatusId'

function createUser(cy){
    cy.get(userCreate).click()
    cy.get(userType).select('Common')              //create user
    cy.get(userLogin).type('Linus')
    cy.get(userPassword).type('123')
    cy.get(userPasswordRepeat).type('123')
    cy.get(userClient).select('THALLYS')
    cy.get(userStatus).select('ACTIVE')
    cy.get(userSave).click()
}

function deleteUser(cy){
    cy.get(userDelete).click()              //delete user
}

module.exports = {
    createUser
}