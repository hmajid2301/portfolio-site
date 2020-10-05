import { graphql } from 'gatsby';
import React from 'react';

import { QueryItem } from '~/@types/index';
import { Layout } from '~/components/Layout';
import { NextButtons } from '~/components/molecules/NextButtons';
import { ToC } from '~/components/molecules/ToC';
import { BlogPost } from '~/components/organisms/BlogPost';
import { SimilarPosts } from '~/components/organisms/SimilarPost';
import config from '~/config/config.json';

export interface Props {
  pageContext: {
    previous: QueryItem['node'];
    next: QueryItem['node'];
  };
  data: {
    markdownRemark: QueryItem['node'] & {
      /** The blog post as a HTML string. */
      content: string;
      /** Absolute path to markdown file. */
      fileAbsolutePath: string;
      /** The first 100 characters from the post. */
      excerpt: string;
      /** The headings in the markdown file. */
      headings: {
        /** The header. */
        value: string;
        /** The type of header i.e. h1, h2 etc (# vs ##). */
        depth: number;
      }[];
    };
  };
}

export default function BlogTemplate({ data, pageContext }: Props) {
  const { markdownRemark } = data;
  const { next, previous } = pageContext;
  const {
    fields,
    frontmatter,
    content,
    excerpt,
    fileAbsolutePath,
    headings,
  } = markdownRemark;

  function getGitMarkdownUrl() {
    const { git_url } = config.article;
    const pathConst = 'gatsby-source-git/Articles';
    const mainGitUrl = git_url.replace('.git', '');
    const slideIndex =
      fileAbsolutePath.lastIndexOf(pathConst) + pathConst.length;
    const markdownFileGitPath = fileAbsolutePath.slice(slideIndex);
    const blogPostOnGit = `${mainGitUrl}/-/blob/master${markdownFileGitPath}`;
    return blogPostOnGit;
  }

  return (
    <Layout
      description={excerpt}
      image={{
        src: `/${frontmatter.slug}/card.jpg`,
        height: 630,
        width: 1200,
      }}
      keywords={frontmatter.tags}
      ogType="article"
      pathname={`/blog/${frontmatter.slug}/`}
      title={frontmatter.title}
    >
      <div className="px-2 py-5 mx-auto my-5 rounded max-w-screen-md bg-background-alt lg:px-0">
        <BlogPost
          coverImage={frontmatter.cover_image?.childImageSharp.fluid}
          data={content}
          date={frontmatter.date}
          editLink={getGitMarkdownUrl()}
          readingTime={fields.readingTime.text}
          slug={`/blog/${frontmatter.slug}/`}
          tags={frontmatter.tags}
          title={frontmatter.title}
          words={fields.readingTime.words}
        />

        <ToC headings={headings} />
      </div>

      <NextButtons next={next} previous={previous} />
      <div className="my-10">
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
      fileAbsolutePath
      headings {
        value
        depth
      }
      ...ArticleFragment
    }
  }
`;
