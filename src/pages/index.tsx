import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { QueryItem, PopularItem } from '~/@types/index';
import { Layout } from '~/components/Layout';
import { Hero } from '~/components/molecules/Hero';
import ImageCards from '~/components/molecules/ImageCards/ImageCards';
import { BlogList } from '~/components/organisms/BlogList';
import { RepositoryList } from '~/components/organisms/RepositoryList';
import config from '~/config/config.json';
import { queryToBlogItem, popularPostsToBlogItem } from '~/helpers/queryToData';

export interface Props {
  data: {
    latest: {
      edges: QueryItem[];
    };
    articles: {
      edges: QueryItem[];
    };
    allPageViews: {
      edges: PopularItem[];
    };
  };
}

const Index = ({ data }: Props) => {
  const { misc, projects, repositories, history } = config;
  const { latest, articles, allPageViews } = data;
  const latestBlogItems = queryToBlogItem(latest);
  const popularBlogItems = popularPostsToBlogItem(articles, allPageViews);

  return (
    <Layout title="Home">
      <Hero name={misc.logo} />
      <Container>
        <Section className="my-20">
          <Header>Latest Posts</Header>
          <BlogList data={latestBlogItems} />
        </Section>

        <Section className="my-10">
          <Header>Most Popular Posts</Header>
          <BlogList data={popularBlogItems} />
        </Section>

        <Section className="my-10">
          <Header>Main Projects</Header>
          <ImageCards dataId="MainProject" items={projects} />
        </Section>

        <Section className="my-10">
          <Header>Other Projects</Header>
          <RepositoryList items={repositories} />
        </Section>

        <Section className="mb-20">
          <Header>Site History</Header>
          <ImageCards dataId="HistoryCard" items={history} />
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

const Header = tw.h1`font-header my-10 font-semibold max-w-lg ml-10 text-3xl lg:text-5xl text-header`;

export const pageQuery = graphql`
  query {
    latest: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
      filter: { frontmatter: { title: { ne: "Uses" } } }
    ) {
      edges {
        node {
          ...ArticleFragment
        }
      }
    }
    articles: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { title: { ne: "Uses" } } }
    ) {
      edges {
        node {
          ...ArticleFragment
        }
      }
    }
    allPageViews(
      sort: { fields: totalCount, order: DESC }
      limit: 3
      filter: { path: { regex: "/blog/i", ne: "/blog" } }
    ) {
      edges {
        node {
          path
          totalCount
        }
      }
    }
  }
`;

export default Index;
