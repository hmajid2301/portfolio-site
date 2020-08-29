/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

import { QueryItem, Tag } from '../../src/@types';
import graphqlFixture from '../fixtures/graphql.json';

describe(`Blog List`, () => {
  let posts: QueryItem[];
  let tags: Tag[];

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
    }).then(
      (res: {
        body: {
          data: {
            allMarkdownRemark: {
              /** A list of blog posts to show. */
              edges: QueryItem[];
              /** A list of tags to show. */
              group: Tag[];
            };
          };
        };
      }) => {
        posts = res.body.data.allMarkdownRemark.edges;
        tags = res.body.data.allMarkdownRemark.group;
      }
    );
  });

  // it(`check blog posts loads`, () => {
  //   posts.slice(0, 9).forEach((post) => {
  //     const { date, title, tags } = post.node.frontmatter;
  //     const { excerpt } = post.node;
  //     cy.visit('/blog/');
  //     cy.contains(title, { timeout: 10000 }).within((card) => {
  //       cy.wrap(card).contains(date);
  //       cy.wrap(card).contains(excerpt.substr(0, 50));
  //       tags.forEach((tag) => {
  //         cy.wrap(card).contains(tag);
  //       });
  //     });
  //   });
  // });

  // it(`check blog links work`, () => {
  //   posts.slice(0, 9).forEach((post) => {
  //     const { title, slug } = post.node.frontmatter;
  //     cy.visit('/blog/');
  //     cy.contains(title, { timeout: 10000 }).click({ force: true });
  //     cy.assertRoute(`/blog/${slug}/`);
  //   });
  // });

  // it(`check tag link work`, () => {
  //   posts.slice(0, 3).forEach((post) => {
  //     const { title, tags } = post.node.frontmatter;
  //     tags.forEach((tag) => {
  //       cy.visit('/blog/');
  //       cy.contains(title).within((card) => {
  //         cy.wrap(card)
  //           .contains(tag)
  //           .invoke('text')
  //           .then((tagText: string) => {
  //             cy.wrap(card).contains(tag).click();
  //             cy.assertRoute(`/blog?tag=${tagText.replace('#', '')}`);
  //           });
  //       });
  //     });
  //   });
  // });

  // it(`check tag filters work`, () => {
  //   tags.slice(0, 3).forEach((tag) => {
  //     cy.visit('/blog/');
  //     cy.contains(`#${tag.fieldValue}`).click();
  //     cy.get('[data-cy=BlogCard]').each((blogCard) => {
  //       cy.wrap(blogCard).within((card) => {
  //         cy.wrap(card).contains(`#${tag.fieldValue}`);
  //       });
  //     });
  //   });
  // });

  it(`check multiple tag filters work`, () => {
    const tags: string[] = [];
    cy.visit('/blog/');
  });
});
