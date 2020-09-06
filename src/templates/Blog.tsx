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
      <div className="max-w-screen-md mx-auto bg-background-alt rounded py-5 my-5 px-2 lg:px-0">
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

        <aside>
          <Toc>
            <h2 className="text-2xl mb-2">Table of contents</h2>
            <InnerScroll
              primary={config.siteData.primary}
              primaryAlt={config.siteData['primary-alt']}
            >
              {headings.map((heading) => (
                <li
                  key={heading.value}
                  className="p-1 leading-5 ml-4 mb-4 mr-4"
                >
                  <a
                    key={heading.value}
                    className="hover:text-secondary transition duration-300"
                    href={`#${heading.value
                      .replace(' ', '-')
                      .replace('.', '')
                      .toLowerCase()}`}
                  >
                    {heading.value}
                  </a>
                </li>
              ))}
            </InnerScroll>
          </Toc>
        </aside>
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
  ${tw`bg-background-alt rounded-md p-8 font-body z-10`}
`;

const NextButton = tw.span`text-main uppercase`;

const NextHeader = tw.h3`text-header my-5`;

const Toc = styled.ul`
  ${tw`bg-background-alt text-main font-body hidden lg:flex`};
  position: fixed;
  left: calc(50% + 400px);
  top: 80px;
  max-height: 30vh;
  width: 310px;
  flex-direction: column;
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin: 0.75rem 0px;
  li {
    line-height: 1px;
    margin-top: 2px;
  }
`;

const InnerScroll = styled.div<{ primary: string; primaryAlt: string }>`
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.primary} ${(props) => props.primaryAlt};
  overflow: hidden auto;
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
