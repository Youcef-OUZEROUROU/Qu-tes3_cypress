

describe('tests api TastDive', () => {
    it('Get request with JDD', () => {
      cy.fixture('jddtastdive').as('research').then(research => {
        research.forEach(research => {
         cy.tasteDiveReq(research.q, research.limit)
          .then(response => {
           expect(response.status).to.eql(200)
           cy.log(JSON.stringify(response.body))
           expect(response.body).to.have.property('Similar')  
          })
        })
      })
    })
  it('Get request for Hulk movie', ()=> {
    cy.tasteDiveReq('Hulk', 3).then (response => {
      expect(response.status).to.eql(200)
      expect(response.body).to.have.property('Similar')
      expect(response.body.Similar).to.have.property('Results')
      expect(response.body.Similar.Info[0].Name).to.eql('Hulk')
      expect(response.body.Similar.Results).to.have.lengthOf(3)
    })
  })
  })
  
  
  