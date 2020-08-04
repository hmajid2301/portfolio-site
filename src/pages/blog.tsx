import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { Layout } from '~/components/Layout';
import { BlogList, QueryItem } from '~/components/organisms/BlogList';

export interface Props {
  data: {
    allMarkdownRemark: {
      /** A list of blog posts to show. */
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

const BlogContainer = styled.section`
  ${tw`mx-auto my-20`};
  max-width: 1750px;
`;

const Header = tw.h1`font-header font-bold text-3xl text-main py-10 ml-10`;

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            slug
            title
            tags
            cover_image {
              childImageSharp {
                fluid {
                  srcWebp
                  srcSetWebp
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
