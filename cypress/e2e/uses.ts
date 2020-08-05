/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe(`Uses`, () => {
  it(`check average word chart loads`, () => {
    cy.visit('/stats/');
    cy.contains('Total words');
  });

  it(`check posts per day chart loads`, () => {
    cy.visit('/stats/');
    cy.contains('Monday');
  });

  it(`check posts per month chart loads`, () => {
    cy.visit('/stats/');
    cy.contains('Jan');
  });
});
