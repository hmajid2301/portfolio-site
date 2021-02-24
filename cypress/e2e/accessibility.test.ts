/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />
/// <reference types="@types/cypress-axe" />

describe('Component accessibility test', () => {
  it('Main Pages', () => {
    cy.visit('/');
    const links = [
      { name: '🏠️ Home', link: '/' },
      { name: '✍️ Blog', link: '/blog/' },
      { name: '🧮️ Stats', link: '/stats/' },
      { name: '📋 Uses', link: '/uses/' },
    ];
    cy.get('[data-cy=BlogCard]').first().click({ force: true });
    cy.wait(500);
    links.forEach((link) => {
      if (!cy.get('[data-cy=NavToggle]').filter(':visible')) {
        cy.get('[data-cy=NavToggle]').click();
      }

      cy.get('a').filter(':visible').contains(link.name).click({ force: true });
      cy.wait(500);
      cy.injectAxe();
      cy.checkA11y({
        include: [['#___gatsby']],
        exclude: [['svg'], ['.gatsby-highlight'], ['.admonition']],
      });
    });
  });

  it('Blog Post', () => {
    cy.visit('/');

    cy.get('[data-cy=BlogCard]').first().click({ force: true });
    cy.wait(500);
    cy.injectAxe();
    cy.checkA11y({
      include: [['#___gatsby']],
      exclude: [['svg'], ['.gatsby-highlight'], ['.admonition']],
    });
  });
});
