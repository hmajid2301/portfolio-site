/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

import { Props as PostData } from '../../src/pages/stats';
import graphqlFixture from '../fixtures/graphql.json';

describe(`Stats`, () => {
  let stats: PostData['data']['allMarkdownRemark']['edges'];

  before(() => {
    const query = `{
      allMarkdownRemark {
        edges {
          node {
            fields {
              readingTime {
                words
              }
            }
            frontmatter {
              date(formatString: "dddd MMM")
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
      stats = res.body.data.allMarkdownRemark.edges;
    });
  });

  it(`check stats page loads`, () => {
    cy.visit('/stats/');
    let total = 0;
    stats.forEach((stat) => {
      total += stat.node.fields.readingTime.words;
    });
    const average = Math.floor(total / stats.length);
    cy.contains(`Total words: ${total.toLocaleString()}`, { timeout: 10000 });
    cy.contains(`${average.toLocaleString()}`, { timeout: 10000 });
    console.log(total);
  });
});
