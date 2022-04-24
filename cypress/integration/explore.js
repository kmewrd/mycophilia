describe('Explore page', () => {
  beforeEach(() => {
    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/users/5044', { fixture: 'user.json' }).as('user-data')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/sightings', { fixture: 'sightings.json' }).as('all-sightings')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungus/1', { fixture: 'fungus-1.json' }).as('fungus-1')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungus/34', { fixture: 'fungus-34.json' }).as('fungus-34')

    cy.intercept('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungus/40', { fixture: 'fungus-40.json' }).as('fungus-40')

    cy.visit('http://localhost:3000')
      .get('input:first')
      .type('mycophile5044')
      .get('input:last')
      .type('fungi')
      .get('button')
      .click()
      .get('nav a:last')
      .click()
  })

  it('should contain a navigation bar', () => {
    cy.get('nav')
      .should('be.visible')
      .and('contain', 'Dashboard')
      .and('contain', 'Explore')
  })

  it('should have a new url', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/explore')
  })

  it('should display a list of regional fungi', () => {
    cy.get('div[class="fungus-list-wrapper"]')
      .should('be.visible')
      .get('div[id="1"]')
      .should('contain', 'Pacific Golden Chantarelle')
      .get('div[id="5"]')
      .should('contain', 'Lion\'s Mane')
  })

  it('each listing should contain an image, common name, and scientific name', () => {
    cy.get('div[id="1"]')
      .should('have.descendants', 'img')
      .and('contain', 'Pacific Golden Chantarelle')
      .and('contain', 'Cantharellus formosus')
  })
})