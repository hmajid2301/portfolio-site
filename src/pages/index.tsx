import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';

import tw from 'twin.macro';

import { Layout } from '~/components/Layout';
import { Hero } from '~/components/molecules/Hero';
import { MainCardItem } from '~/components/molecules/MainCard';
import { RepositoryItem } from '~/components/molecules/RepositoryCard';
import { BlogList, QueryItem } from '~/components/organisms/BlogList';
import { ProjectList } from '~/components/organisms/ProjectsList';
import { RepositoryList } from '~/components/organisms/RepositoryList';
import config from '~/config/website';

export interface Props {
  data: {
    allMarkdownRemark: {
      edges: QueryItem[];
    };
  };
}

const Index = ({ data }: Props) => {
  const { meta, projects, repositories } = config;

  const projectItems: MainCardItem[] = [];
  Object.values(projects).forEach((value) => {
    projectItems.push(value);
  });

  const repositoryItems: RepositoryItem[] = [];
  Object.values(repositories).forEach((value) => {
    repositoryItems.push(value);
  });

  return (
    <Layout title="Home">
      <Hero text={meta.hero} />
      <Container className="max-w-screen-2xl mx-auto">
        <section className="my-20">
          <Header>Latest Posts</Header>
          <BlogList data={data} />
        </section>

        <section className="my-10">
          <Header>Main Projects</Header>
          <ProjectList projectItems={projectItems} />
        </section>

        <section>
          <Header>Other Projects</Header>
          <RepositoryList items={repositoryItems} />
        </section>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  max-width: 1750px;
`;

const Header = tw.h1`mx-5 lg:mx-0 font-header font-semibold max-w-lg my-10 text-5xl text-header`;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
    ) {
      edges {
        node {
          id
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

export default Index;
