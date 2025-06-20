describe( 'Headers', () => {
  it('Validate the header and the content type', () => {
    cy.request('employees').its('headers').its('content-type').should('include', 'application/json');
  })
  }
);