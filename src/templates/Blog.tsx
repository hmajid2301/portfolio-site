import { graphql } from 'gatsby';
import React from 'react';

import { QueryItem } from '~/@types/index';
import { Layout } from '~/components/Layout';
import { BlogPost } from '~/components/organisms/BlogPost';
import { SimilarPosts } from '~/components/organisms/SimilarPost';
import config from '~/config/config.json';

export interface Props {
  data: {
    markdownRemark: QueryItem['node'] & {
      /** The blog post as a HTML string. */
      content: string;
      /** Absolute path to markdown file. */
      fileAbsolutePath: string;
      /** The first 100 characters from the post. */
      excerpt: string;
    };
  };
}

export default function BlogTemplate({ data }: Props) {
  const { markdownRemark } = data;
  const {
    fields,
    frontmatter,
    content,
    excerpt,
    fileAbsolutePath,
  } = markdownRemark;

  function getGitMarkdownUrl() {
    const { git_url } = config.article;
    const pathConst = 'gatsby-source-git/Articles';
    const mainGitUrl = git_url.replace('.git', '');
    const markdownFileGitPath = fileAbsolutePath
      .slice(fileAbsolutePath.lastIndexOf(pathConst))
      .replace(pathConst, '');
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
      <div className="max-w-screen-xl mx-auto bg-secondary-background rounded py-5 my-5 px-2 lg:px-0">
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
      ...ArticleFragment
    }
  }
`;
