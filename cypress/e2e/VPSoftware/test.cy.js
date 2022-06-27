describe("test VP app", () => {
  const SEARCH_REQUEST = "русский военный корабль!";
  const mainURL = "https://www.google.com.ua/";

  beforeEach(() => {});

  it("new search request", () => {
    cy.visit(mainURL)
      .get(".gLFyf.gsfi")
      .should("have.value", "")
      .type(SEARCH_REQUEST, { delay: 100 })
      .should("have.value", SEARCH_REQUEST)
      .type("{enter}");
  });
});
