import { graphql } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { ProgramTags } from '~/components/atoms/ProgramTags';
import { Layout } from '~/components/Layout';
import { BlogList, QueryItem } from '~/components/organisms/BlogList';

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
  console.log(data);

  return (
    <Layout title={`Tags - ${tag}`}>
      <TagsContainer>
        <ProgramTags size="4xl" text={tag} />
        <BlogItems>
          <BlogList data={data} />
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
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            slug
            title
            tags
            cover_image {
              publicURL
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
