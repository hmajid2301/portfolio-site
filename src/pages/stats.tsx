import { graphql } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { PopularItem } from '~/@types/index';
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
          fields: {
            readingTime: {
              time: number;
              text: string;
              minutes: number;
              words: number;
            };
          };
          frontmatter: {
            /** The post date. */
            date: string;
          };
        };
      }[];
    };
    allPageViews: {
      edges: PopularItem[];
    };
  };
}

const Stats = ({ data }: Props) => {
  const { edges: blogItems } = data.allMarkdownRemark;
  const { edges: popularItems } = data.allPageViews;
  const totalPosts = blogItems.length;
  const {
    dayData,
    dayWordData,
    monthData,
    monthWordData,
    totalWords,
    totalMinutes,
  } = getBlogStats(blogItems);
  const { popularData, totalViews } = getPopularStats(popularItems);

  const days: ChartData[] = objectToDataArray(dayData, totalPosts);
  const months: ChartData[] = objectToDataArray(monthData, totalPosts);
  const dayWords: ChartData[] = objectToDataArray(dayWordData, totalWords);
  const monthWords: ChartData[] = objectToDataArray(monthWordData, totalWords);
  const popularPosts: ChartData[] = objectToDataArray(popularData, totalViews);

  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes % 60);

  return (
    <Layout title="Blog Statistics">
      <Section>
        <MainText>
          This site has a total of <b>{totalPosts}</b> articles 📚. All the
          articles I&apos;ve written contain a total of{' '}
          <b>{totalWords.toLocaleString()}</b> words 🖊️. It would take you
          approximately <b>{hours}</b> hours and <b>{minutes}</b> minutes ⌚ to
          read them all.
        </MainText>
        <DonutChart
          length={totalPosts}
          title="Average word count"
          total={totalWords}
          unit="words"
        />
        <HorizontalBarChart
          data={popularPosts}
          title="Most Popular Blog Posts"
        />
        <HorizontalBarChart data={days} title="Posts per Day" />
        <HorizontalBarChart data={dayWords} title="Words per Day" />
        <VerticalBarChart data={months} title="Posts per Month" />
        <HorizontalBarChart data={monthWords} title="Words per Month" />
      </Section>
    </Layout>
  );
};

function getPopularStats(popularItems: Props['data']['allPageViews']['edges']) {
  const popularData: { [name: string]: number } = {};
  let totalViews = 0;
  popularItems.forEach((popularItem) => {
    const { path, totalCount } = popularItem.node;
    popularData[path] = totalCount;
    totalViews += totalCount;
  });

  return { popularData, totalViews };
}

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

  const monthWordData: { [name: string]: number } = {
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

  const dayWordData: { [name: string]: number } = {
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
    Sunday: 0,
  };

  let totalWords = 0;
  let totalMinutes = 0;

  blogItems.forEach((blogItem) => {
    const { words, minutes } = blogItem.node.fields.readingTime;
    const { date } = blogItem.node.frontmatter;
    totalWords += words;
    totalMinutes += minutes;
    const [day, month] = date.split(' ');
    dayData[day] += 1;
    monthData[month] += 1;
    monthWordData[month] += words;
    dayWordData[day] += words;
  });

  return {
    dayData,
    monthData,
    monthWordData,
    dayWordData,
    totalWords,
    totalMinutes,
  };
}

function objectToDataArray(obj: Record<string, number>, total: number) {
  const newArr: ChartData[] = [];
  Object.entries(obj).forEach(([key, value]) => {
    newArr.push({
      name: key,
      count: value,
      percent: (value / total) * 100,
    });
  });

  return newArr;
}

const Section = tw.section`max-w-2xl mx-auto my-10 px-4`;

const MainText = tw.p`text-main text-lg font-body bg-background-alt p-4`;

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { frontmatter: { title: { ne: "Uses" } } }) {
      edges {
        node {
          frontmatter {
            date(formatString: "dddd MMM")
          }
          fields {
            readingTime {
              time
              text
              minutes
              words
            }
          }
        }
      }
    }
    allPageViews(
      sort: { fields: totalCount, order: DESC }
      limit: 10
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

export default Stats;
