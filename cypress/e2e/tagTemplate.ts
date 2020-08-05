/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe(`/tag/{tag}`, () => {
  it(`clicking on tag then article takes you to blog`, () => {
    cy.visit('/tag/');
    cy.contains('react').click();
    cy.contains('React Hooks, Context & Local Storage').click({ force: true });
    cy.contains('React Hooks, Context & Local Storage').assertRoute(
      '/blog/react-hooks-context-and-local-storage/'
    );
  });
});
