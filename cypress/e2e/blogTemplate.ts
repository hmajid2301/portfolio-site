/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe(`/blob/{blog}`, () => {
  it(`clicking on tag then article takes you to blog`, () => {
    cy.visit('/blog/');
    cy.contains('React Hooks, Context & Local Storage').click({ force: true });
    cy.contains('React Hooks, Context & Local Storage').assertRoute(
      '/blog/react-hooks-context-and-local-storage/'
    );
  });

  it(`selecting tag in article takes you to tag`, () => {
    cy.visit('/blog/');
    cy.contains('React Hooks, Context & Local Storage').click({ force: true });
    cy.contains('#react').click().assertRoute('/tag/react/');
  });
});
