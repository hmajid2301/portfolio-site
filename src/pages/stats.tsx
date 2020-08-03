import { graphql } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { Layout } from '~/components/Layout';
import { DonutChart } from '~/components/molecules/DonutChart';
import { HorizontalBarChart } from '~/components/molecules/HorizontalBarChart';
import {
  VerticalBarChart,
  ChartData,
} from '~/components/molecules/VerticalBarChart';

export interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        /** List of all articles. */
        node: {
          wordCount: {
            /** Number of words for this article. */
            words: number;
          };
          frontmatter: {
            /** The post date. */
            date: string;
          };
        };
      }[];
    };
  };
}

const Stats = ({ data }: Props) => {
  const { edges: blogItems } = data.allMarkdownRemark;
  const totalPosts = blogItems.length;
  const { dayData, monthData, totalWords } = getBlogStats(blogItems);

  const days: ChartData[] = [];
  const months: ChartData[] = [];

  objectToDataArray(dayData, totalPosts, days);
  objectToDataArray(monthData, totalPosts, months);

  return (
    <Layout title="Dashboard">
      <Section>
        <DonutChart
          length={totalPosts}
          title="Average word count"
          total={totalWords}
          unit="words"
        />
        <HorizontalBarChart data={days} title="Posts per Day" />
        <VerticalBarChart data={months} title="Posts per Month" />
      </Section>
    </Layout>
  );
};

function getBlogStats(blogItems: Props['data']['allMarkdownRemark']['edges']) {
  const dayData: { [name: string]: number } = {
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
    Sunday: 0,
  };

  const monthData: { [name: string]: number } = {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  };

  let totalWords = 0;

  blogItems.forEach((blogItem) => {
    totalWords += blogItem.node.wordCount.words;
    const [day, month] = blogItem.node.frontmatter.date.split(' ');
    dayData[day] += 1;
    monthData[month] += 1;
  });

  return { dayData, monthData, totalWords };
}

function objectToDataArray(
  obj: Record<string, number>,
  total: number,
  newArr: Array<ChartData>
) {
  Object.entries(obj).forEach(([key, value]) => {
    newArr.push({
      name: key,
      count: value,
      percent: (value / total) * 100,
    });
  });
}

const Section = tw.section`max-w-xl mx-auto my-10`;

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          wordCount {
            words
          }
          frontmatter {
            date(formatString: "dddd MMM")
          }
        }
      }
    }
  }
`;

export default Stats;
