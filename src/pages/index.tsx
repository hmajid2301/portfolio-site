import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';

import tw from 'twin.macro';

import { Layout } from '~/components/Layout';
import { Hero } from '~/components/molecules/Hero';
import ImageCards from '~/components/molecules/ImageCards/ImageCards';
import { BlogList, QueryItem } from '~/components/organisms/BlogList';
// import { ProjectList } from '~/components/organisms/ProjectsList';
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
  const { meta, projects, repositories, history } = config;

  return (
    <Layout title="Home">
      <Hero text={meta.hero} />
      <Container>
        <Section className="my-20">
          <Header>Latest Posts</Header>
          <BlogList data={data} />
        </Section>

        <Section className="my-10">
          <Header>Main Projects</Header>
          <ImageCards items={projects} />
        </Section>

        <Section className="my-10">
          <Header>Other Projects</Header>
          <RepositoryList items={repositories} />
        </Section>

        <Section className="mb-20">
          <Header>Site History</Header>
          <ImageCards items={history} />
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
          excerpt(pruneLength: 100)
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
