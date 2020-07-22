import { Link, graphql } from 'gatsby';
import React from 'react';

import { Layout } from '~/components/Layout';

export interface Props {
  pageContext: {
    tag: string;
  };
  data: {
    allMarkdownRemark: {
      edges: TagItem[];
      totalCount: number;
    };
  };
}

export interface TagItem {
  node: {
    frontmatter: {
      /** The title of the blog post. */
      title: string;
      /** The unique slug/url of the blog post. */
      slug: string;
    };
  };
}

const Tags = ({ pageContext, data }: Props) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug, title } = node.frontmatter;
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <Link to="/tags">All tags</Link>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;
