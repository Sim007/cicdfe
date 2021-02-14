describe('Visit page', () => {
  it('Visit a website', () => {
    cy.visit('/nl/over-centric/wie-we-zijn/')
  })  
  it('finds the content "type"', () => {  
    cy.contains('gekwalificeerde professionals')
  })
})
