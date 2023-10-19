describe('template spec', () => {

  beforeEach(() => {
    cy.visit('https://develop.d3nylssqqiptjw.amplifyapp.com/')
    cy.get('[id="email-input"]').type('joebloggs@gmail.com')
    cy.get('[id="password-input"]').type('123456')
    cy.get('[id="login-button"]').click()
    cy.contains('Data')
  })

  // afterEach(() => {
  //   cy.get('[id="logout-link"]').click()
  // })

  
  it('logs in', () => {
    
    
    cy.get('[href="/data"]').click()
    cy.get('[id="templates-selector"]').select('Banking')
    cy.contains('Submit Banking').click()
    cy.get('[id="generate-values"]').click()
    cy.contains('File is ready!')
  })

})