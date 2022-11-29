/// <reference types="cypress" />

let violationData = null

describe('Todo application', () => {
    
    beforeEach(() => {
        cy.visit('http://todomvc.com/examples/react')
        cy.injectAxe() // inject axe core in your test application
    })

    it('should log any accessibility failures', () => {
        // cy.checkA11y() // scan your page from any accessibility violations
        cy.checkA11y(null, null, terminalLog)
    })

    it('should exclude specific elements on the page', () => {
        // cy.checkA11y( {exclude: ['.learn']} )
        cy.checkA11y(null, {exclude: ['.learn']}, terminalLog )
    })

    it('should only test specific elements on the page', () => {
        cy.wait(1000)
        // cy.checkA11y('.learn')
        cy.checkA11y(null, '.learn', terminalLog)
    })

    it('should only include rules with serious and critical impacts', () => {
        // cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })
        cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] }, terminalLog)
    })

    it('should exclude specific accessibility rules', () => {
        cy.checkA11y(null, { rules: {
            'color-contrast' : { enabled: false }
        } }, terminalLog)
    })
  })

  function terminalLog(violations) {
    const violationSummary = `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} ${violations.length === 1 ? 'was' : 'were'} detected in ${Cypress.currentTest.title}`
    cy.task(
      'log',
      `${violations.length} accessibility violation${
        violations.length === 1 ? '' : 's'
      } ${violations.length === 1 ? 'was' : 'were'} detected`
    )
    // pluck specific keys to keep the table readable
    // Possible keys: id, impact, tags, description, help, helpUrl, nodes
    violationData = violations.map(
      ({ id, impact, description, help, helpUrl, nodes }) => ({
        id,
        impact,
        description,
        help,
        helpUrl,
        nodes: nodes.length
      })
    )

    violationData.summary = violationSummary
    cy.writeFile('cypress/reports/violations.json', violationData, { flag: 'a+' })
    cy.writeFile('cypress/reports/violations.json', ",\n", { flag: 'a+' })

    cy.task('table', violationData)
  }