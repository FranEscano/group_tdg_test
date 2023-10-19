describe('template spec', () => {

  beforeEach(() => {
    cy.visit('https://develop.d3nylssqqiptjw.amplifyapp.com/')
    // cy.get('[id="email-input"]').type('team1@test.com')
    // cy.get('[id="password-input"]').type('123456')
    // cy.get('[id="login-button"]').click()
    // cy.contains('Data')
  })

  // afterEach(() => {
  //   cy.get('[id="logout-link"]').click()
  // })

  
  // it('logs in', () => {
    
  //   cy.get('[href="/data"]').click()
  //   cy.get('[id="templates-selector"]').select('Banking')
  //   cy.contains('Submit Banking').click()
  //   cy.get('[id="generate-values"]').click()
  //   cy.contains('File is ready!')
  // })

  // it('User log in generates data and save to the history', () => {
  //   cy.get('[href="/data"]').click()
  //   cy.get('[id="templates-selector"]').select('Banking')
  //   cy.get('[id="submit-template"]').click()
  //   cy.get('[id="generate-values"]').click()
  //   cy.contains('File is ready!')
  //   cy.get('[id="file-name-input"]').invoke('val').then(sometext =>{ cy.log(sometext)
  //   cy.get('[id="upload-button"]').click()
  //   cy.get('[id="modal-ok-button"]').click()
  //   cy.wait(3000)
  //   cy.get('[href="/history"]').click()
  //   cy.contains(sometext)})
  // })

  it('User logs into TDG and generates 100 data examples for "firstName", "lastName", "email", "fullAddress"', () => {
    cy.get('[href="/data"]').click()
    cy.get('[id="entries-counter"]').clear().type(100)
    cy.get('[id="personal"]').click()
    cy.contains('First name').click();
    cy.contains('Last Name').click();
    cy.contains('Email Address').click();
    cy.get('[id="residentialAddress"]').click()
    cy.contains('Full Address').click();
    cy.get('[id="submit-selected"]').click()
    cy.get('[id="generate-values"]').click()
    cy.contains('File is ready!')
  })
})