import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React, { useState } from 'react';
import tw from 'twin.macro';

import { QueryItem } from '~/@types/index';
import { ProgramTags } from '~/components/atoms/ProgramTags';
import { Layout } from '~/components/Layout';
import { BlogItem } from '~/components/molecules/BlogCard';
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
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [blogItemsShow, setBlogItemsShow] = useState<BlogItem[]>(blogItems);

  function intersection(first: string[], second: string[]) {
    const s = new Set(second);
    return first.filter((item) => s.has(item));
  }

  return (
    <Layout title="Blog">
      <BlogContainer>
        <TagItem>
          {data.allMarkdownRemark.group.map((tag) => (
            <ProgramTags
              active={activeTags.includes(tag.fieldValue)}
              className="py-1 my-1"
              onClick={() => {
                const programTag = tag.fieldValue;
                if (activeTags.includes(programTag)) {
                  setActiveTags(
                    activeTags.filter((item) => item !== programTag)
                  );
                } else {
                  setActiveTags(activeTags.concat([programTag]));
                }

                console.log(intersection(activeTags, blogItems[0].tags));
                if (activeTags) {
                  setBlogItemsShow(
                    blogItems.filter(
                      (item) => intersection(activeTags, item.tags) !== []
                    )
                  );
                }
              }}
              size="2xl"
              text={tag.fieldValue}
            />
          ))}
        </TagItem>
        <Header>Blog</Header>
        <BlogList data={blogItemsShow} />
      </BlogContainer>
    </Layout>
  );
};

const BlogContainer = styled.section`
  ${tw`mx-auto my-20`};
  max-width: 1750px;
`;

const Header = tw.h1`font-header font-bold text-3xl text-main py-10 ml-10`;

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
