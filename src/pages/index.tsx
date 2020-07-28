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
      <Container>
        <Section className="my-20">
          <Header>Latest Posts</Header>
          <BlogList data={data} />
        </Section>

        {/* <Section className="my-10">
          <Header>Main Projects</Header>
          <ProjectList projectItems={projectItems} />
        </Section> */}

        <Section className="mb-20">
          <Header>Other Projects</Header>
          <RepositoryList items={repositoryItems} />
        </Section>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  ${tw`mx-auto`};
  max-width: 1750px;
`;

const Section = tw.section`flex flex-col`;

const Header = tw.h1`font-header my-10 font-semibold max-w-lg ml-10 text-5xl text-header`;

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
