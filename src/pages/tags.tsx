import { graphql } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { ProgramTags } from '~/components/atoms/ProgramTags';
import { Layout } from '~/components/Layout';

export interface Props {
  data: {
    allMarkdownRemark: {
      /** A list of tags to show. */
      group: Tag[];
    };
  };
}

export interface Tag {
  /** A name of the tag. */
  fieldValue: string;
}

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}: Props) => (
  <Layout title="Tags">
    <TagsContainer>
      <Header>Tags</Header>
      <TagItem>
        {group.map((tag) => (
          <ProgramTags className="py-1 my-1" size="2xl" text={tag.fieldValue} />
        ))}
      </TagItem>
    </TagsContainer>
  </Layout>
);

const TagsContainer = tw.div`max-w-screen-xl mx-auto min-h-screen`;

const TagItem = tw.div`my-10 flex flex-wrap`;

const Header = tw.h1`font-header font-bold text-3xl text-header my-10`;

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
