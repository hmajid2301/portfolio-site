/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe(`Stats`, () => {
  it(`check uses page loads`, () => {
    cy.visit('/uses/');
    cy.contains(
      'The following is a list of the tools that I use on a daily basis. This page was inspired by'
    );
  });
});
