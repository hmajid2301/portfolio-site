import { graphql } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { QueryItem } from '~/@types/index';
import { ProgramTags } from '~/components/atoms/ProgramTags';
import { Layout } from '~/components/Layout';
import { BlogList } from '~/components/organisms/BlogList';
import { queryToBlogItem } from '~/helpers/queryToData';

export interface Props {
  pageContext: {
    /** The current tag. */
    tag: string;
  };
  data: {
    allMarkdownRemark: {
      /** A list of blog posts to show. */
      edges: QueryItem[];
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

const TagTemplate = ({ pageContext, data }: Props) => {
  const { tag } = pageContext;
  const blogItems = queryToBlogItem(data.allMarkdownRemark);
  return (
    <Layout title={`#${tag}`}>
      <TagsContainer>
        <ProgramTags size="4xl" text={tag} />
        <BlogItems>
          <BlogList data={blogItems} />
        </BlogItems>
      </TagsContainer>
    </Layout>
  );
};

const TagsContainer = tw.div`max-w-screen-xl mx-auto min-h-screen`;

const BlogItems = tw.div`my-10`;

export default TagTemplate;

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
          ...ArticleFragment
        }
      }
    }
  }
`;
