import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '~/components/Layout';
import { BlogPost } from '~/components/organisms/BlogPost';
import { Footer } from '~/components/organisms/Footer';
import { Header } from '~/components/organisms/Header';

export interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        /** The post date. */
        date: string;
        /** A list of tags for the article i.e. related topics. */
        tags: string[];
        /** The title of the blog post. */
        title: string;
        /** The unique slug/url of the blog post. */
        slug: string;
      };
      /** The blog post as a HTML string. */
      html: string;
    };
  };
}

export default function BlogPostTemplate({ data }: Props) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  console.log(frontmatter, html);

  return (
    <Layout>
      <Header />
      <BlogPost
        data={html}
        date={frontmatter.date}
        slug={frontmatter.slug}
        tags={frontmatter.tags}
        title={frontmatter.title}
      />
      <Footer />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        slug
        title
        tags
      }
    }
  }
`;
