/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

import { QueryItem } from '../../src/@types';
import { Props as PostData } from '../../src/templates/Blog';
import graphqlFixture from '../fixtures/graphql.json';
import config from '../../src/config/config.json';

describe(`Blog Post`, () => {
  let posts: {
    node: PostData['data']['markdownRemark'];
    next: QueryItem['node'];
    previous: QueryItem['node'];
  }[];

  before(() => {
    const query = `{
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {title: {ne: "Uses"}}}) {
        edges {
          node {
            id
            excerpt(pruneLength: 100)
            fields {
              readingTime {
                words
                text
              }
            }
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
          previous {
            frontmatter {
              title
              slug
            }
          }
          next {
            frontmatter {
              title
              slug
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

  it(`check all the posts are loading`, () => {
    posts.slice(0, 1).forEach((post) => {
      const { date, title, tags } = post.node.frontmatter;
      const { readingTime } = post.node.fields;
      const { previous, next } = post;

      cy.visit('/blog/');
      cy.contains(title).click({ force: true });
      cy.contains(date);
      cy.contains(`${readingTime.text} / ${readingTime.words}`, {
        timeout: 10000,
      });
      cy.contains('Similar Posts').within((similar) => {
        cy.get('[data-cy=BlogCard]').should('have.length', 3);
      });
      tags.forEach((tag) => {
        cy.contains(tag);
      });
      cy.get('[data-cy=Share]')
        .findAllByRole('button')
        .each((button) => {
          cy.wrap(button).click();
        });

      cy.contains(previous.frontmatter.title).should('exist');
      cy.contains(next.frontmatter.title).should('not.exist');
    });
  });

  it(`check seo meta data is correct`, () => {
    posts.slice(0, 3).forEach((post) => {
      const { title, tags } = post.node.frontmatter;
      const { excerpt } = post.node;
      cy.visit('/blog/');
      cy.contains(title).click({ force: true });
      cy.wait(1000);
      cy.url().then((url) => {
        cy.get('meta[property="og:url"]').should(
          'have.attr',
          'content',
          url.replace('http://localhost:8000', config.siteData.siteUrl)
        );
        cy.get('meta[property="og:image"]').should(
          'have.attr',
          'content',
          `${url.replace(
            'http://localhost:8000/blog',
            config.siteData.siteUrl
          )}card.jpg`
        );
      });

      cy.get('meta[property="og:title"]').should('have.attr', 'content', title);
      cy.get('meta[name="keywords"]').should(
        'have.attr',
        'content',
        tags.toString()
      );
      cy.get('meta[property="og:description"]').should(
        'have.attr',
        'content',
        excerpt
      );

      cy.get('meta[property="og:type"]').should(
        'have.attr',
        'content',
        'article'
      );
    });
  });

  it(`check tag links work`, () => {
    posts.slice(0, 3).forEach((post) => {
      const { tags, title } = post.node.frontmatter;
      tags.forEach((tag) => {
        cy.visit('/blog/');
        cy.contains(title).click({ force: true });
        cy.contains(tag).click();
      });
    });
  });
});
