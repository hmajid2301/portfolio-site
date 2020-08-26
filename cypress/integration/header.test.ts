/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

import config from '../../src/config/config.json';

describe(`Header`, () => {
  it(`check header links work`, () => {
    cy.visit('/');
    const links = [
      { name: '🏠️ Home', link: '/' },
      { name: '✍️ Blog', link: '/blog/' },
      { name: '🧮️ Stats', link: '/stats/' },
      { name: '📋 Uses', link: '/uses/' },
    ];

    links.forEach((link) => {
      cy.contains(link.name).click({ force: true });
      cy.assertRoute(link.link);
    });
  });

  it(`check logo link work`, () => {
    cy.visit('/');
    cy.contains(config.misc.logo).click().assertRoute('/');
  });

  it(`check search bar work`, () => {
    cy.visit('/');
    cy.get('[data-cy=SearchIcon]').click();
    cy.get('[data-cy=SearchBar]').type('article');
    cy.get('[data-cy=SearchItem]').first().click();
  });

  it(`check theme icons work`, () => {
    cy.visit('/');
    cy.get('[data-cy=ThemeIcon]').click();
    cy.get('.theme-light');
    cy.get('[data-cy=ThemeIcon]').click();
    cy.get('.theme-dark');
  });
});
