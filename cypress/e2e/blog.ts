/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe(`Blog`, () => {
  it(`selecting blog loads articles`, () => {
    cy.visit('/blog/');
    cy.contains('React Hooks, Context & Local Storage').click({ force: true });
    cy.contains('React Hooks, Context & Local Storage').assertRoute(
      '/blog/react-hooks-context-and-local-storage/'
    );
  });

  it(`selecting tag loads tags`, () => {
    cy.visit('/blog/');
    cy.contains('#react-native').click().assertRoute('/tag/react-native/');
  });
});
