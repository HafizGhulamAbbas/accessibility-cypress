/// <reference types="cypress" />


describe('Todo application', () => {
    beforeEach(() => {
        cy.visit('http://todomvc.com/examples/react')
        cy.injectAxe() // inject axe core in your test application
    })

    it('should log any accessibility failures', () => {
        cy.checkA11y() // scan your page from any accessibility violations
    })

    it('should exclude specific elements on the page', () => {
        cy.checkA11y( {exclude: ['.learn']} )
    })

    it('should only test specific elements on the page', () => {
        cy.wait(1000)
        cy.checkA11y('.learn')
    })

    it('should only include rules with serious and critical impacts', () => {
        cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
    })

    it('should exclude specific accessibility rules', () => {
        cy.checkA11y(null, { rules: {
            'color-contrast' : { enabled: false }
        } })
    })
  })