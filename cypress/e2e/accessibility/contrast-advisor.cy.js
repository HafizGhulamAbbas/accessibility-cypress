/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

describe('Contrast Advisor demo', () => {

    it('should show contrast issues on Applitools dashboard', () => {
        cy.eyesOpen({
            appName: 'Contrast Advisor Demo',
            batchName: 'Contrast Advisor Demo'
        })
        cy.visit('https://heavyweight.nl/')
        cy.eyesCheckWindow()
        cy.eyesClose()
    })
  })