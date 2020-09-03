/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />
/// <reference types="@types/cypress-axe" />

describe('Component accessibility test', () => {
  it('Hello', () => {
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
      cy.injectAxe();
      cy.checkA11y({
        include: [['#root']],
        exclude: [['svg']],
      });
    });

    cy.visit('/blog/');
    cy.get('[data-cy=BlogCard]').first().click();
    cy.injectAxe();
    cy.checkA11y({
      include: [['#root']],
      exclude: [['svg']],
    });
  });
});
