import { graphql } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { Layout } from '~/components/Layout';
import { BlogList, QueryItem } from '~/components/organisms/BlogList';

export interface Props {
  data: {
    allMarkdownRemark: {
      edges: QueryItem[];
    };
  };
}

const Blog = ({ data }: Props) => {
  return (
    <Layout title="Blog">
      <BlogContainer>
        <Header>Blog</Header>
        <BlogList data={data} />
      </BlogContainer>
    </Layout>
  );
};

const BlogContainer = tw.div`mx-auto max-w-lg py-20`;

const Header = tw.h1`font-header font-bold text-3xl`;

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            slug
            title
            tags
            cover_image {
              publicURL
              childImageSharp {
                sizes(maxWidth: 1240) {
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`;
