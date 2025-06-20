describe( 'status code', () => {
  it('should validate status code 200', () => {
    cy.request('employees').its('status').should('eq', 200);
  });

   it('should validate status code 404', () => {
    cy.request({
      url: 'employees/4',
      failOnStatusCode: false // Prevent Cypress from failing the test on 404
    }).its('status').should('eq', 404);
  });
}

);