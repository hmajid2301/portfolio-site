import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
// @ts-ignore
import { relatedPagesByTags } from 'related-pages';

import { QueryItem } from '~/@types/index';
import { BlogItem } from '~/components/molecules/BlogCard';
import { BlogList } from '~/components/organisms/BlogList';
import { queryToBlogItem } from '~/helpers/queryToData';

export default function SimilarPosts({ tags }: { tags: string[] }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            filter: { frontmatter: { title: { ne: "Uses" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 100)
                frontmatter {
                  date(formatString: "Do MMMM, YYYY")
                  slug
                  title
                  tags
                  cover_image {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                        srcWebp
                        srcSetWebp
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
          }
        }
      `}
      render={(data: { allMarkdownRemark: { edges: QueryItem[] } }) => {
        const blogItems = queryToBlogItem(data.allMarkdownRemark);
        const related: BlogItem[] = relatedPagesByTags(blogItems, tags);
        const similarPosts = related.slice(1, 4);
        return (
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-header font-header text-4xl py-5">
              Similar Posts
            </h1>
            <BlogList data={similarPosts} />
          </div>
        );
      }}
    />
  );
}
