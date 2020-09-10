/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

import config from '../../src/config/config.json';

Cypress._.each(['iphone-6', 'macbook-15', [1920, 1080]], (viewport) => {
  describe(`Smoke Test: ${viewport}`, () => {
    it(`does it smoke?`, () => {
      cy.visit('/');
      cy.log('Check hero text loads.');
      cy.contains(`Hello, I'm ${config.misc.logo}`, { timeout: 10000 });

      cy.log('Open first blog post.');
      cy.get('[data-cy=BlogCard]').should('have.length', 6);
      cy.get('[data-cy=BlogCard]').first().click({ force: true });

      cy.log('Open first tag from first blog post.');
      cy.visit('/');
      cy.get('[data-cy=ProgramTag]')
        .first()
        .invoke('text')
        .then((tag) => {
          cy.log('Check every blog post contains this tag.');
          cy.contains(tag)
            .first()
            .click({ force: true })
            .assertRoute(`/blog?tag=${tag.replace('#', '')}`);
          cy.wait(1000);
          cy.get('[data-cy=BlogCard]').each((blogCard) => {
            cy.wrap(blogCard).contains(tag);
          });
        });

      cy.log('Check header navigation links work.');
      cy.visit('/');
      const links = [
        { name: '🏠️ Home', link: '/' },
        { name: '✍️ Blog', link: '/blog/' },
        { name: '🧮️ Stats', link: '/stats/' },
        { name: '📋 Uses', link: '/uses/' },
      ];

      links.forEach((link) => {
        if (!cy.get('[data-cy=NavToggle]').filter(':visible')) {
          cy.get('[data-cy=NavToggle]').click();
        }

        cy.get('a').filter(':visible').contains(link.name).click();
        cy.wait(500);
        cy.assertRoute(link.link);
      });

      cy.log('Test search bar works.');
      cy.visit('/');
      cy.get('[data-cy=SearchIcon]').click({ force: true });
      cy.get('[data-cy=SearchBar]').type('React');
      cy.contains('React Hooks, Context & Local Storage').click();
      cy.assertRoute('/blog/react-hooks-context-and-local-storage/');

      cy.log('Test theme icons works.');
      cy.visit('/');
      cy.get('[data-cy=ThemeIcon]').click({ force: true });
      cy.get('.theme-light');
      cy.get('[data-cy=ThemeIcon]').click({ force: true });
      cy.get('.theme-dark');
    });
  });
});
