/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

import { QueryItem } from '../../src/components/organisms/BlogList';
import graphqlFixture from '../fixtures/graphql.json';

describe(`Blog List`, () => {
  let posts: QueryItem[];

  before(() => {
    const query = `{
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {title: {ne: "Uses"}}}) {
        edges {
          node {
            id
            excerpt(pruneLength: 100)
            frontmatter {
              date(formatString: "Do MMMM, YYYY")
              slug
              title
              tags
              cover_image {
                childImageSharp {
                  fluid {
                    srcWebp
                    srcSetWebp
                  }
                }
              }
            }
          }
        }
      }
    }`;

    cy.request({
      url: graphqlFixture.graphqlEndpoint,
      method: 'POST',
      body: { query },
      failOnStatusCode: false,
    }).then((res) => {
      posts = res.body.data.allMarkdownRemark.edges;
    });
  });

  it(`check blog posts loads`, () => {
    posts.slice(0, 9).forEach((post) => {
      const { date, title, tags, cover_image } = post.node.frontmatter;
      const { excerpt } = post.node;
      cy.visit('/blog/');
      cy.contains(title, { timeout: 10000 }).within((card) => {
        cy.wrap(card).contains(date);
        cy.wrap(card).contains(excerpt.substr(0, 50));
        tags.forEach((tag) => {
          cy.wrap(card).contains(tag);
        });
      });
    });
  });

  it(`check blog links work`, () => {
    posts.slice(0, 9).forEach((post) => {
      const { title, slug } = post.node.frontmatter;
      cy.visit('/blog/');
      cy.contains(title, { timeout: 10000 }).click({ force: true });
      cy.assertRoute(`/blog/${slug}/`);
    });
  });

  it(`check tag link work`, () => {
    posts.slice(0, 3).forEach((post) => {
      const { title, tags, cover_image } = post.node.frontmatter;
      tags.forEach((tag) => {
        cy.visit('/blog/');
        cy.contains(title).within((card) => {
          cy.wrap(card)
            .contains(tag)
            .invoke('text')
            .then((tagText: string) => {
              cy.wrap(card).contains(tag).click();
              cy.assertRoute(`/tag/${tagText.replace('#', '')}/`);
            });
        });
      });
    });
  });
});
