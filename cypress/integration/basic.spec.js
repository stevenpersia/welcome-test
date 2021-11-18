/// <reference types="cypress" />
const API_URL =
  "https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k";

describe("When I visit Welcome Test website without data", () => {
  beforeEach(() => {
    cy.fixture("data.json").then(() => cy.intercept("GET", API_URL, {}));
    cy.visit("http://localhost:3000");
  });

  it("should display a tag who contains length of offers", () => {
    cy.contains("offer(s)").parent().should("have.text", "0 offer(s)");
  });

  it("should display 0 offers", () => {
    cy.get('[data-cy="job-card"]').should("have.length", 0);
  });

  it("should display an infinite loader", () => {
    cy.get('[data-cy="loader"]').should("exist");
  });
});

describe("When I visit Welcome Test website with fixture data", () => {
  beforeEach(() => {
    cy.fixture("data.json").then((data) => cy.intercept("GET", API_URL, data));
    cy.visit("http://localhost:3000");
  });

  it("should display a tag who contains length of offers", () => {
    cy.contains("offer(s)").parent().should("have.text", "2 offer(s)");
  });

  it("should display 2 offers", () => {
    cy.get('[data-cy="job-card"]').should("have.length", 2);
  });
});

describe("When I click on an offer", () => {
  beforeEach(() => {
    cy.fixture("data.json").then((data) => cy.intercept("GET", API_URL, data));
    cy.visit("http://localhost:3000");
  });

  it("should display more content in the modal", () => {
    cy.get('[data-cy="job-card"]').first().click();
    cy.get('[data-cy="modal"]').contains("Offer 1").click();
  });

  describe("And when I leave the modal", () => {
    it("should display 'Already seen' content in specific offer", () => {
      cy.get('[data-cy="job-card"]').first().click();
      cy.get('[data-cy="modal"]').contains("Close").click();
      cy.get('[data-cy="job-card"]').contains("Already seen");
    });
  });
});
