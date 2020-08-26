import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import tw from 'twin.macro';

import { Icon } from '~/components/atoms/Icon';
import { ProgramTags as Tags } from '~/components/atoms/ProgramTags';

export interface Props {
  /** The blog to show in the post. */
  item: BlogItem;
}

export interface BlogItem {
  /** The post date. */
  date: string;
  /** The description of the article (excerpt). */
  description: string;
  /** Path to the cover image. */
  image?: FluidObject;
  /** A list of tags for the article i.e. related topics. */
  tags: string[];
  /** The title of the blog post. */
  title: string;
  /** The unique slug/url of the blog post. */
  link: string;
  readingTime?: string;
}

const BlogCard = ({ item }: Props) => (
  <BlogCardContainer data-cy="BlogCard">
    <Card data-testid="BlogCard" to={`/blog/${item.link}/`}>
      <ImageContainer>
        <Image alt="Cover for article." fluid={item.image} loading="lazy" />
      </ImageContainer>
      <Details>
        <Title data-cy="BlogTitle">
          <Icon className="mr-2" icon="code" />
          {item.title}
        </Title>
        <Row>
          <Date>
            <Icon className="mr-2" icon="calendar" />
            {item.date}
          </Date>
          <Text>
            <Icon className="mr-2" icon="hourglass" />
            {item.readingTime}
          </Text>
        </Row>
        <Text>
          <Icon className="mr-2" icon="description" />
          {item.description}
        </Text>
        <TagContainer>
          <Icon className="mr-2" icon="tag" />
          {item.tags &&
            item.tags.map((category) => (
              <Tags
                key={category}
                active
                className="py-1 my-2"
                size="sm"
                text={category}
              />
            ))}
        </TagContainer>
      </Details>
    </Card>
  </BlogCardContainer>
);

const BlogCardContainer = tw.div`lg:mx-4 xl:mx-8 max-w-md h-full text-main bg-secondary-background mx-auto transform
hover:-translate-y-2 transition duration-300`;

const ImageContainer = tw.div`h-64 cursor-pointer overflow-y-hidden`;

const Image = styled(Img)`
  ${tw`w-full`}
`;

const Card = styled(Link)`
  ${tw`py-20 lg:py-24`}
`;

const Row = tw.div`flex flex-row justify-between`;

const Details = tw.div`p-6 lg:block lg:text-left`;

const Text = tw.p`font-body my-2`;

const Title = tw.h1`mt-4 leading-snug font-header font-bold text-lg pb-1`;

const TagContainer = tw.div`flex flex-wrap items-center leading-none my-5`;

const Date = tw.p` my-2`;

export default BlogCard;
