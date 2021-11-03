describe('First testing', () => {
  it('test 1', () => {
    cy.visit('http://localhost:3000/sign-in')
    cy.get('form').within(() => {
      cy.get('[data-testid="signin-input-username"]').type('this is username')
    })
  })
})

export {}
