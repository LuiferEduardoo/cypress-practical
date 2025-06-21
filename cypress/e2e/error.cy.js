describe("Errors", () => {
  it("Should validate fall code and error mensaje", () => {
    cy.request({
      url: "https://rickandmortyapi.com/api/location/3999999",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.error).to.be.eq("Location not found");
    });
  });
});