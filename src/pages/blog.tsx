import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { QueryItem } from '~/@types/index';
import { Layout } from '~/components/Layout';
import { BlogList } from '~/components/organisms/BlogList';
import { queryToBlogItem } from '~/helpers/queryToData';

export interface Props {
  data: {
    allMarkdownRemark: {
      /** A list of blog posts to show. */
      edges: QueryItem[];
    };
  };
}

const Blog = ({ data }: Props) => {
  const blogItems = queryToBlogItem(data.allMarkdownRemark);

  return (
    <Layout title="Blog">
      <BlogContainer>
        <Header>Blog</Header>
        <BlogList data={blogItems} />
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { title: { ne: "Uses" } } }
    ) {
      edges {
        node {
          ...ArticleFragment
        }
      }
    }
  }
`;
