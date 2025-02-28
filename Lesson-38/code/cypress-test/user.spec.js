describe("Test", () => {
  it("visit the homepage", () => {
    cy.visit("/");
    cy.contains("Welcome to NextJs!");
  });
});
