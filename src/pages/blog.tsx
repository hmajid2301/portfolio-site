import styled from '@emotion/styled';
import { Location } from '@reach/router';
import { graphql } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { QueryItem } from '~/@types/index';
import { ProgramTags } from '~/components/atoms/ProgramTags';
import { Layout } from '~/components/Layout';
import { BlogList } from '~/components/organisms/BlogList';
import { queryToBlogItem } from '~/helpers/queryToData';

export interface Props {
  data: {
    allMarkdownRemark: {
      /** A list of blog posts to show. */
      edges: QueryItem[];
      /** A list of tags to show. */
      group: Tag[];
    };
  };
}

export interface Tag {
  /** A name of the tag. */
  fieldValue: string;
}

const Blog = ({ data }: Props) => {
  const blogItems = queryToBlogItem(data.allMarkdownRemark);

  return (
    <Layout title="Blog">
      <Location>
        {({ location }) => (
          <div>
            <TagsContainer>
              <Header>Tags</Header>
              <TagItem>
                {data.allMarkdownRemark.group.map((tag) => (
                  <ProgramTags
                    className="py-1 my-1"
                    size="2xl"
                    text={tag.fieldValue}
                  />
                ))}
              </TagItem>
            </TagsContainer>
            <BlogContainer>
              <Header>Blog</Header>
              <BlogList data={blogItems} />
            </BlogContainer>
          </div>
        )}
      </Location>
    </Layout>
  );
};

const BlogContainer = styled.section`
  ${tw`mx-auto my-20`};
  max-width: 1750px;
`;

const Header = tw.h1`font-header font-bold text-3xl text-main py-10 ml-10`;

const TagsContainer = tw.div`max-w-screen-xl mx-auto min-h-screen px-4`;

const TagItem = tw.div`my-10 flex flex-wrap`;

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
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
