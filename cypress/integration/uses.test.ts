/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

import { Props as PostData } from '../../src/templates/Blog';
import graphqlFixture from '../fixtures/graphql.json';

describe(`Uses`, () => {
  let uses: PostData['data']['markdownRemark'];

  before(() => {
    const query = `{
      markdownRemark(frontmatter: {title: {eq: "Uses"}}) {
        frontmatter {
          title
          date(formatString: "Do MMMM, YYYY")
        }
        fields {
          readingTime {
            text
            words
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
      uses = res.body.data.markdownRemark;
    });
  });
  it(`check uses loads`, () => {
    const { date, title } = uses.frontmatter;
    const { readingTime } = uses.fields;
    cy.visit('/uses/');
    cy.contains(title);
    cy.contains(date);
    cy.contains(`${readingTime.text} / ${readingTime.words}`, {
      timeout: 10000,
    });
  });
});
