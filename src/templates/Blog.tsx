import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { QueryItem } from '~/@types/index';
import { Layout } from '~/components/Layout';
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
      <div className="max-w-screen-lg mx-auto bg-secondary-background rounded py-5 my-5 px-2 lg:px-0">
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

        <Toc>
          <InnerScroll>
            <h2>Table of contents</h2>

            {headings.map((i) => (
              <li key={i}>
                <a key={i} href="#logotsx">
                  {i.value}
                </a>
              </li>
            ))}
          </InnerScroll>
        </Toc>
      </div>

      <NextArticleContainer>
        {previous && (
          <NextLink to={`/blog/${previous.frontmatter.slug}`}>
            <NextButton>Previous</NextButton>
            <NextHeader>{previous.frontmatter.title}</NextHeader>
          </NextLink>
        )}

        {next && (
          <NextLink
            className="text-right"
            to={`/blog/${next.frontmatter.slug}`}
          >
            <NextButton>Next</NextButton>
            <NextHeader>{next.frontmatter.title}</NextHeader>
          </NextLink>
        )}
      </NextArticleContainer>

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

const NextArticleContainer = tw.div`max-w-screen-lg mx-auto grid grid-flow-col grid-cols-2 gap-4`;

const NextLink = styled(Link)`
  ${tw`bg-secondary-background rounded-md p-8 font-body`}
`;

const NextButton = tw.span`text-main uppercase`;

const NextHeader = tw.h3`text-header my-5`;

const Toc = styled.ul`
  position: fixed;
  left: calc(50% + 400px);
  top: 110px;
  max-height: 70vh;
  width: 310px;
  display: flex;
  li {
    line-height: 1px;
    margin-top: 2px;
  }
`;

const InnerScroll = styled.div`
  overflow: hidden;
  overflow-y: scroll;
`;

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
