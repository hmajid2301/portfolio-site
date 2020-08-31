/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

import config from '../../src/config/config.json';

describe(`Home Page`, () => {
  it(`check hero loads`, () => {
    cy.visit('/');
    cy.log('Check hero text loads.');
    cy.contains(`Hello, I'm ${config.misc.logo}`, { timeout: 10000 });
  });

  it(`check latest posts are loading`, () => {
    cy.visit('/');
    cy.get('[data-cy=BlogCard]').should('have.length', 6);
  });

  it(`check tags link are working in blog post`, () => {
    cy.visit('/');
    cy.get('[data-cy=BlogCard]')
      .first()
      .within(() => {
        cy.get('[data-cy=ProgramTag]')
          .first()
          .invoke('text')
          .then((tag) => {
            cy.get('[data-cy=ProgramTag]').first().click();
            cy.assertRoute(`/blog?tag=${tag.replace('#', '')}`);
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
    cy.get('[data-cy=MainProject]').should(
      'have.length',
      config.projects.length
    );
  });

  it(`check main project opens link`, () => {
    const project = config.projects[0];
    cy.visit('/');
    cy.contains(project.text).click();
    cy.url().should('be', project.link);
  });

  it(`check repository cards are loading`, () => {
    cy.visit('/');
    cy.get('[data-cy=RepositoryCard]').should(
      'have.length',
      config.repositories.length
    );
  });

  it(`check repository cards opens link`, () => {
    const repo = config.repositories[0];
    cy.visit('/');
    cy.get('[data-cy=RepositoryCard]')
      .first()
      .within(() => {
        cy.contains('More Info').click();
      });
    cy.url().should('be', repo.url);
  });

  it(`check history cards are loading`, () => {
    cy.visit('/');
    cy.get('[data-cy=HistoryCard]').should(
      'have.length',
      config.history.length
    );
  });

  it(`check history cards open link`, () => {
    const history = config.history[0];
    cy.visit('/');
    cy.get('[data-cy=HistoryCard]').first().click();
    cy.url().should('be', history.link);
  });
});
