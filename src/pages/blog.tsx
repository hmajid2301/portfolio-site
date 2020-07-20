import { graphql } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { Layout } from '~/components/Layout';
import { BlogCard } from '~/components/molecules/BlogCard';
import chunkData from '~/helpers/chunkData';

export interface Props {
  data: {
    allMarkdownRemark: {
      edges: BlogItem[];
    };
  };
}

export interface BlogItem {
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
  const data: BlogItem[][] = chunkData(edges, 2);

  return (
    <Layout>
      <BlogContainer>
        <Header>Blog</Header>
        {data.map((blog) => (
          <BlogRow data={blog} />
        ))}
      </BlogContainer>
    </Layout>
  );
};

const BlogRow = ({ data }: { data: BlogItem[] }) => {
  const blogRow = data.map((blogItem: BlogItem) => (
    <BlogCardContainer>
      <BlogCard
        item={{
          date: blogItem.node.frontmatter.date,
          image: blogItem.node.frontmatter.cover_image.publicURL,
          tags: blogItem.node.frontmatter.tags,
          title: blogItem.node.frontmatter.title,
          url: blogItem.node.frontmatter.slug,
        }}
      />
    </BlogCardContainer>
  ));

  return <BlogRowContainer>{blogRow}</BlogRowContainer>;
};

const BlogContainer = tw.div`mx-auto max-w-lg py-20`;

const Header = tw.h1`font-header font-bold text-3xl`;

const BlogRowContainer = tw.div`flex flex-col md:flex-row items-center`;

const BlogCardContainer = tw.div`m-4`;

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
