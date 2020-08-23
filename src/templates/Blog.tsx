import { graphql } from 'gatsby';
import React from 'react';

import { QueryItem } from '~/@types/index';
import { Layout } from '~/components/Layout';
import { BlogPost } from '~/components/organisms/BlogPost';
import { SimilarPosts } from '~/components/organisms/SimilarPost';

export interface Props {
  data: {
    markdownRemark: QueryItem['node'] & {
      /** The blog post as a HTML string. */
      content: string;
      /** The first 100 characters from the post. */
      excerpt: string;
    };
  };
}

export default function BlogTemplate({ data }: Props) {
  const { markdownRemark } = data;
  const { fields, frontmatter, content, excerpt } = markdownRemark;

  return (
    <Layout
      description={excerpt}
      image={{
        src: `/blog/${frontmatter.slug}/card.jpg`,
        height: 630,
        width: 1200,
      }}
      keywords={frontmatter.tags}
      ogType="article"
      pathname={`/blog/${frontmatter.slug}/`}
      title={frontmatter.title}
    >
      <div className="max-w-screen-xl mx-auto bg-secondary-background rounded py-5 my-5 px-2 lg:px-0">
        <BlogPost
          coverImage={frontmatter.cover_image?.childImageSharp.fluid}
          data={content}
          date={frontmatter.date}
          readingTime={fields.readingTime.text}
          slug={`/blog/${frontmatter.slug}/`}
          tags={frontmatter.tags}
          title={frontmatter.title}
          words={fields.readingTime.words}
        />
        {frontmatter.title !== 'Uses' ? (
          <SimilarPosts tags={frontmatter.tags} />
        ) : (
          <div />
        )}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      content: html
      excerpt(pruneLength: 100)
      frontmatter {
        date(formatString: "Do MMMM, YYYY")
        slug
        title
        tags
        cover_image {
          childImageSharp {
            fluid {
              srcWebp
              srcSetWebp
              ...GatsbyImageSharpFluid
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
