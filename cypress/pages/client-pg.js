const clientView = '#j_idt50 > table > tbody > tr:nth-child(1) > td:nth-child(7) > a:nth-child(1)'
const clientCreate = '#j_idt50 > a.btn.btn-primary'
const clientSave = '#j_idt52 > a.btn.btn-primary'                                       //button selectors
const clientList = '#j_idt51 > a:nth-child(11)'
const clientEdit = '#j_idt50 > table > tbody > tr:nth-child(7) > td:nth-child(7) > a:nth-child(2)'
const clientUpdate = '#j_idt52 > a.btn.btn-primary'
const clientDelete = '#j_idt50 > table > tbody > tr:nth-child(7) > td:nth-child(7) > a:nth-child(3)'

const clientName = '#name'
const clientEmail = '#email'                           //form inputs for client creation
const clientGender = '#gender\\3a 0'
const clientSocialSecurityNumber = '#socialSecurityNumber'

function createClient(cy){
    cy.get(clientCreate).click()
    cy.get(clientName).type('Linus Wiksten')
    cy.get(clientEmail).type('linus@gmail.com')
    cy.get(clientGender).click()
    cy.get(clientSocialSecurityNumber).type('12345678')
    cy.get(clientSave).click()
    cy.get(clientList).click()
}

function viewClient(cy){
    cy.get(clientView).click()
}

function editClient(cy){
    cy.get(clientEdit).click()
    cy.get(clientName).clear().type('Anders Wiksten')
    cy.get(clientUpdate).click()
}

function deleteClient(cy){
    cy.get(clientDelete).click()
}

module.exports = {
    createClient,
    viewClient,
    editClient,
    deleteClient
}