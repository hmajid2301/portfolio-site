/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

import { Tag } from '../../src/pages/tag';
import graphqlFixture from '../fixtures/graphql.json';

describe(`Tag List`, () => {
  let tags: Tag[];

  before(() => {
    const query = `{
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }`;

    cy.request({
      url: graphqlFixture.graphqlEndpoint,
      method: 'POST',
      body: { query },
      failOnStatusCode: false,
    }).then((res) => {
      tags = res.body.data.allMarkdownRemark.group;
    });
  });

  it(`check tags loads`, () => {
    tags.forEach((tag) => {
      cy.visit('/tag/');
      const tagName = tag.fieldValue;
      cy.contains(tagName, { timeout: 10000 });
    });
  });

  it(`check tags links work`, () => {
    tags.slice(0, 9).forEach((tag) => {
      cy.visit('/tag/');
      const tagName = tag.fieldValue;
      cy.contains(tagName, { timeout: 10000 })
        .click()
        .assertRoute(`/tag/${tagName}/`);
    });
  });
});
