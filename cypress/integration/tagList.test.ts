/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe(`Tag Blog List`, () => {
  it(`check tags loads correct blog list`, () => {
    cy.visit('/tag/');
    cy.get('[data-cy=ProgramTag]')
      .first()
      .invoke('text')
      .then((tag) => {
        cy.contains(tag).click();
        cy.get('[data-cy=BlogCard]').each((card) => {
          cy.wrap(card).contains(tag);
        });
      });
  });

  it(`check blog post loads with tag`, () => {
    cy.visit('/tag/');
    cy.get('[data-cy=ProgramTag]')
      .first()
      .invoke('text')
      .then((tag) => {
        cy.contains(tag).click();
        cy.get('[data-cy=BlogCard]').first().click();
        cy.contains(tag, { timeout: 10000 });
      });
  });
});
