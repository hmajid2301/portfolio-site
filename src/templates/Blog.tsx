import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '~/components/Layout';
import { BlogPost } from '~/components/organisms/BlogPost';

export interface Props {
  data: {
    markdownRemark: {
      fields: {
        /** How long it'll take to finish the article. */
        readingTime: {
          text: string;
          words: string;
        };
      };

      frontmatter: {
        /** The post date. */
        date: string;
        /** A list of tags for the article i.e. related topics. */
        tags: string[];
        /** Path to featured image. */
        image?: {
          childImageSharp: {
            resize: {
              src: string;
              width: number;
              height: number;
            };
          };
        };
        /** The title of the blog post. */
        title: string;
        /** The unique slug/url of the blog post. */
        slug: string;
      };

      /** The blog post as a HTML string. */
      html: string;
      /** The first 160 chars. */
      excerpt: string;
    };
  };
}

export default function BlogTemplate({ data }: Props) {
  const { markdownRemark } = data;
  const { fields, frontmatter, html, excerpt } = markdownRemark;

  return (
    <Layout
      description={excerpt}
      image={
        frontmatter.image ? frontmatter.image.childImageSharp.resize : undefined
      }
      keywords={frontmatter.tags}
      ogType="article"
      pathname={`/blog/${frontmatter.slug}/`}
      title={frontmatter.title}
    >
      <BlogPost
        coverImage={frontmatter.image?.childImageSharp.resize.src}
        data={html}
        date={frontmatter.date}
        readingTime={fields.readingTime.text}
        slug={frontmatter.slug}
        tags={frontmatter.tags}
        title={frontmatter.title}
        words={fields.readingTime.words}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        slug
        title
        tags
        image: cover_image {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
      fields {
        readingTime {
          words
          text
        }
      }
    }
  }
`;
