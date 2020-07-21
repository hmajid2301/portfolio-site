import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { AnimatedCard } from '~/components/atoms/AnimatedCard';
import { AnimatedImage } from '~/components/atoms/AnimatedImage';
import { ProgramTags as Tags } from '~/components/atoms/ProgramTags';

export interface Props {
  /** The background color of post. */
  background?: string;
  /** The color of main text. */
  color?: string;
  /** The blog to show in the post. */
  item: BlogItem;
  /** The text color of the main text. */
  textColor?: string;
}

export interface BlogItem {
  /** The post date. */
  date: string;
  /** Path to the cover image. */
  image: string;
  /** A list of tags for the article i.e. related topics. */
  tags: string[];
  /** The title of the blog post. */
  title: string;
  /** The unique slug/url of the blog post. */
  url: string;
}

const BlogCard = ({ background, color, item, textColor }: Props) => (
  <Container
    className={`group text-${textColor} hover:text-${color} bg-${background}`}
    testId={`Card-${item.title}`}
  >
    <Card to={item.url}>
      <AnimatedImage image={item.image} />
      <Details className={`border-${background}`}>
        <Title>{item.title}</Title>
        <MetaContainer>
          {item.tags &&
            item.tags.map((category) => (
              <Tags key={category} text={category} />
            ))}
        </MetaContainer>
        <Date className={`text-${textColor}`}>{item.date}</Date>
      </Details>
    </Card>
  </Container>
);

const Container = styled(AnimatedCard)`
  ${tw`lg:mx-4 xl:mx-8 max-w-sm h-full`}
`;

const Card = styled(Link)`
  ${tw`py-20 lg:py-24`}
`;

const Details = tw.div`p-6 rounded lg:block lg:text-left`;

const Title = tw.h5`mt-4 leading-snug font-header font-bold text-lg pb-1`;

const MetaContainer = tw.div`flex items-center leading-none my-5`;

const Date = tw.p`italic`;

export default BlogCard;
