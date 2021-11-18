/// <reference types="cypress" />
const API_URL =
  "https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k";

// TODO
describe("When I click on Group By filter", () => {
  beforeEach(() => {
    cy.fixture("data.json").then((data) => cy.intercept("GET", API_URL, data));
    cy.visit("http://localhost:3000");
  });

  it("should display all corresponding data", () => {});
});

describe("When I search an offer", () => {
  beforeEach(() => {
    cy.fixture("data.json").then((data) => cy.intercept("GET", API_URL, data));
    cy.visit("http://localhost:3000");
  });

  describe("with 'Your deam job?' filter", () => {
    it("should display one corresponding offer", () => {
      cy.get('[name="text"]').type("offer 1");
      cy.get("form").find("button").eq(1).click();
      cy.get('[data-cy="job-card"]').should("have.length", 1);
    });

    it("should display 2 corresponding offers", () => {
      cy.get('[name="text"]').type("offer");
      cy.get("form").find("button").eq(1).click();
      cy.get('[data-cy="job-card"]').should("have.length", 2);
    });

    it("should display 0 corresponding offers", () => {
      cy.get('[name="text"]').type("offer 3");
      cy.get("form").find("button").eq(1).click();
      cy.get('[data-cy="job-card"]').should("have.length", 0);
    });
  });

  describe("with 'Group By' filter", () => {
    it("should display one corresponding offer", () => {
      cy.get('[name="groupBy"]').click();
      cy.get("#downshift-1-item-0").click();
      cy.get("form").find("button").eq(1).click();
      cy.get('[data-cy="job-card"]').should("have.length", 1);
    });
  });

  describe("with two filters", () => {
    it("should display one corresponding offer", () => {
      cy.get('[name="text"]').type("offer");
      cy.get('[name="groupBy"]').click();
      cy.get("#downshift-1-item-0").click();
      cy.get("form").find("button").eq(1).click();
      cy.get('[data-cy="job-card"]').should("have.length", 1);
    });

    it("should display 0 corresponding offers", () => {
      cy.get('[name="text"]').type("offer 2");
      cy.get('[name="groupBy"]').click();
      cy.get("#downshift-1-item-0").click();
      cy.get("form").find("button").eq(1).click();
      cy.get('[data-cy="job-card"]').should("have.length", 0);
    });
  });
});

describe("When I reset my search", () => {
  beforeEach(() => {
    cy.fixture("data.json").then((data) => cy.intercept("GET", API_URL, data));
    cy.visit("http://localhost:3000");
  });

  describe("with one filter", () => {
    it("should display all offers", () => {
      cy.get('[name="text"]').type("offer 1");
      cy.get("form").find("button").eq(1).click();
      cy.get("form").find("button").eq(2).click();
      cy.get('[data-cy="job-card"]').should("have.length", 2);
    });
  });

  describe("with two filters", () => {
    it("should display all offers", () => {
      cy.get('[name="text"]').type("offer");
      cy.get('[name="groupBy"]').click();
      cy.get("#downshift-1-item-0").click();
      cy.get("form").find("button").eq(1).click();
      cy.get("form").find("button").eq(2).click();
      cy.get('[data-cy="job-card"]').should("have.length", 2);
    });
  });
});
