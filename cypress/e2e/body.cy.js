describe("boydy", () => {
  it("should validate the body", () => {
    cy.request("employees/1")
      .its("body")
      .its("first_name")
      .should("be.equal", "Javier");
  });

  it("shoul validate the header and content type", () => {
    cy.request("employees/1").then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.headers["content-type"]).to.be.equal(
        "application/json"
      );
      expect(response.body.first_name).to.be.equal("Javier");
      expect(response.body.last_name).to.be.equal("Eschweiler");
    });
  });
});
