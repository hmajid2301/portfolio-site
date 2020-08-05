/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

import config from '../../src/config';

describe(`Home Page`, () => {
  it(`check hero text loads`, () => {
    cy.visit('/');
    cy.contains("I'm Haseeb");
    cy.get('#tsparticles');
  });

  it(`check latest posts are loading`, () => {
    cy.visit('/');
    cy.get('[data-cy=BlogCard]').should('have.length', 3);
  });

  it(`check tags link are working`, () => {
    cy.visit('/');
    cy.get('[data-cy=BlogCard]')
      .first()
      .within(() => {
        cy.get('[data-cy=ProgramTag]')
          .first()
          .invoke('text')
          .then((tag) => {
            cy.get('[data-cy=ProgramTag]')
              .first()
              .click()
              .assertRoute(`/tag/${tag.replace('#', '')}/`);
          });
      });
  });

  it(`check blog link are working`, () => {
    cy.visit('/');
    cy.get('[data-cy=BlogCard]')
      .first()
      .within(() => {
        cy.get('[data-cy=BlogTitle]')
          .first()
          .invoke('text')
          .then((title) => {
            cy.get('[data-cy=BlogTitle]').first().click();
            cy.contains(title);
          });
      });
  });

  it(`check main projects are loading`, () => {
    cy.visit('/');
    cy.get('[data-cy=MainProject]').should('have.length', 4);
  });

  it(`check main project opens link`, () => {
    cy.visit('/');
    cy.contains('Composerisation').click();
    cy.url().should('be', 'https://composerisation.haseebmajid.dev/');
  });

  it(`check repository cards are loading`, () => {
    cy.visit('/');
    cy.get('[data-cy=RepositoryCard]').should('have.length', 6);
  });

  it(`check repository cards opens link`, () => {
    cy.visit('/');
    cy.get('[data-cy=RepositoryCard]')
      .first()
      .within(() => {
        cy.contains('More Info').click();
      });
    cy.url().should('be', config.repositories[0].url);
  });

  it(`check history cards are loading`, () => {
    cy.visit('/');
    cy.get('[data-cy=HistoryCard]').should('have.length', 2);
  });

  it(`check history cards open link`, () => {
    cy.visit('/');
    cy.get('[data-cy=HistoryCard]').first().click();
    cy.url().should('be', config.history[0].link);
  });
});
