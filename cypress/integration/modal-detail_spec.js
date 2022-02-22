context('Modal test', () => {
    beforeEach(() =>{
      cy.visit('http://localhost:3000/')
    })
  
    it('View detail', () => {
        cy.get('#title_row').click()
        cy.get('.modal-dialog').should('be.visible')
    })

    it('Close detail', () => {
        cy.get('#title_row').click()
        cy.get('#btn-close').click()
        cy.get('.modal-dialog').should('not.exist')
    })

    it('Add product from detail', () => {
        cy.get('#title_row').click()
        cy.get('#btn-add').click()
        cy.get('#value-0')
            .should((e) => {
                console.log(e)
                expect(e[0].value).to.eq('1')
            })
    })

})