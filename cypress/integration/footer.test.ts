/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

import config from '../../src/config/config.json';

describe(`Footer`, () => {
  it(`check footer links work`, () => {
    cy.visit('/');
    const links = [
      { name: '🏠️ Home', link: '/' },
      { name: '✍️ Blog', link: '/blog/' },
      { name: '🧮️ Stats', link: '/stats/' },
      { name: '📋 Uses', link: '/uses/' },
    ];

    links.forEach((link) => {
      cy.get('[data-cy=Footer]').contains(link.name).click({ force: true });
      cy.assertRoute(link.link);
    });
  });

  it(`check social links work`, () => {
    cy.visit('/');
    cy.get('[data-cy=SocialLink]').each((link) => {
      cy.wrap(link).click();
      cy.url().should('be', config.social[0].url);
    });
  });
});
