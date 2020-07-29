import React from 'react';
import tw from 'twin.macro';

import { BlogCard, BlogItem } from '~/components/molecules/BlogCard';

export interface Props {
  /** The background color of post. */
  background?: string;
  /** The color of main text. */
  color?: string;
  data: {
    allMarkdownRemark: {
      edges: QueryItem[];
    };
  };
  /** The text color of the main text. */
  textColor?: string;
}

export interface QueryItem {
  node: {
    excerpt: string;
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

const BlogList = ({ data }: Props) => {
  const blogItems: BlogItem[] = [];
  data.allMarkdownRemark.edges.forEach((element) => {
    const { frontmatter, excerpt } = element.node;

    if (frontmatter.title !== 'Uses') {
      blogItems.push({
        description: excerpt,
        date: frontmatter.date,
        image: frontmatter.cover_image.publicURL,
        tags: frontmatter.tags,
        title: frontmatter.title,
        url: frontmatter.slug,
      });
    }
  });

  return (
    <BlogRowContainer>
      {blogItems.map((blogItem) => (
        <BlogCard item={blogItem} />
      ))}
    </BlogRowContainer>
  );
};

const BlogRowContainer = tw.div`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4`;

export default BlogList;
