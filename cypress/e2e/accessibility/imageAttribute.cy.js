/// <reference types="cypress" />


describe('Using alt attributes on img elements', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
  })

  it('checks that each image element has an alt attribute', () => {
      cy.assertAttrExists('img', 'alt')
  })

  it.only('checks element does not have duplicate attributes', () => {
    attributesCompliance('body')
  })
})

function attributesCompliance(baseElement) {
  cy.get(baseElement)
  .each((element) => {
    cy.wrap(element).within(() => {
      if(element.children().length == 0) {
        cy.log("Found no child, returning...")
        return
      }
      cy.get(element.children())
      .each((innerElement) => {
        cy.wrap(innerElement).within(ele => {
          let el = Cypress.$(ele[0].tagName.toLowerCase())
          if(el[0].getAttributeNames().length > 1) {
            cy.log("Trying to print attributes: " + el[0].getAttributeNames())
          }
          attributesCompliance(innerElement)
        })
      })
    })
  })
}