/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

import config from '../../src/config';

describe(`Layout`, () => {
  it(`check header links work`, () => {
    cy.visit('/');
    const links = [
      { name: '🏠️ Home', link: '/' },
      { name: '✍️ Blog', link: '/blog/' },
      { name: '🔖 Tags', link: '/tag/' },
      { name: '🧮️ Stats', link: '/stats/' },
      { name: '📋 Uses', link: '/uses/' },
    ];

    links.forEach((link) => {
      cy.get('[data-cy=NavToggle]').click();
      cy.contains(link.name).click({ force: true });
      cy.assertRoute(link.link);
    });
  });

  it(`check search bar work`, () => {
    cy.visit('/');
    cy.get('[data-cy=SearchIcon]').click();
    cy.get('[data-cy=SearchBar]').type('React');
    cy.contains('React Hooks, Context & Local Storage').click();
    cy.assertRoute('/blog/react-hooks-context-and-local-storage/');
  });

  it(`check theme icons work`, () => {
    cy.visit('/');
    cy.get('[data-cy=ThemeIcon]').click();
    cy.get('.theme-light');
    cy.get('[data-cy=ThemeIcon]').click();
    cy.get('.theme-dark');
  });

  it(`check social links work`, () => {
    cy.visit('/');
    cy.get('[data-cy=SocialLink]').first().click();
    cy.url().should('be', config.meta.social[0].url);
  });
});
