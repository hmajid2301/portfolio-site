/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe(`Tag`, () => {
  it(`selecting tag loads articles with that tag`, () => {
    cy.visit('/tag/');
    cy.contains('react').click();

    cy.get('[data-cy=BlogCard]').each((blogCard) => {
      cy.wrap(blogCard).within(() => {
        cy.contains('#react');
      });
    });
  });
});
