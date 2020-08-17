const routes = ['badge.html', 'button.html'];

describe('Component accessibility test', () => {
  it('Hello', () => {
    cy.visit('/');
    const links = [
      { name: '🏠️ Home', link: '/' },
      { name: '✍️ Blog', link: '/blog/' },
      { name: '🔖 Tags', link: '/tag/' },
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
        exclude: ['svg'],
      });
    });
  });
});
