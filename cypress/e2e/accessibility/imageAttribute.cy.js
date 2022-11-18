/// <reference types="cypress" />

describe('Using alt attributes on img elements', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('baseUrl'))
    })
  
    it('check that each image element has an alt attribute', () => {
        cy.assertAttrExists('img', 'alt')
    })
  
  })
  