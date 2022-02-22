context('Buttons test', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000/')
  })

    it('Add product', () => {
      cy.get('#btn-up-1').dblclick()
      cy.get('#btn-up-3').click()
      cy.get('#btn-up-5').click()
      cy.get('#btn-up-4').dblclick()
      cy.get('#value-1').should((e) => expect(e[0].value).to.eq('2'))
      cy.get('#value-3').should((e) => expect(e[0].value).to.eq('1'))
      cy.get('#value-5').should((e) => expect(e[0].value).to.eq('1'))
      cy.get('#value-4').should((e) => expect(e[0].value).to.eq('2'))
    })

    it('Remove product', () => {
      cy.get('#btn-up-1').dblclick()
      cy.get('#btn-down-1').click()
    })
  })