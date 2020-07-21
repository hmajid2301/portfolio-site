import { graphql } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { Layout } from '~/components/Layout';
import { BlogItem } from '~/components/molecules/BlogCard';
import { BlogList } from '~/components/organisms/BlogList';

export interface Props {
  data: {
    allMarkdownRemark: {
      edges: QueryItem[];
    };
  };
}

export interface QueryItem {
  node: {
    frontmatter: {
      /** The post date. */
      date: string;
      cover_image: {
        /** Path to the cover image. */
        publicURL: string;
      };
      /** A list of tags for the article i.e. related topics. */
      tags: string[];
      /** The title of the blog post. */
      title: string;
      /** The unique slug/url of the blog post. */
      slug: string;
    };
  };
}

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: Props) => {
  const blogItem: BlogItem[] = [];
  edges.forEach((element) => {
    const { frontmatter } = element.node;
    blogItem.push({
      date: frontmatter.date,
      image: frontmatter.cover_image.publicURL,
      tags: frontmatter.tags,
      title: frontmatter.title,
      url: frontmatter.slug,
    });
  });

  return (
    <Layout>
      <BlogContainer>
        <Header>Blog</Header>
        <BlogList data={blogItem} />
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
