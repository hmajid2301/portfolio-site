import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import tw from 'twin.macro';

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
  image: FluidObject;
  /** A list of tags for the article i.e. related topics. */
  tags: string[];
  /** The title of the blog post. */
  title: string;
  /** The unique slug/url of the blog post. */
  url: string;
}

const BlogCard = ({ item }: Props) => (
  <BlogCardContainer data-cy="BlogCard">
    <Card to={`/blog/${item.url}/`}>
      <ImageContainer>
        <Image alt="Cover for article." fluid={item.image} loading="lazy" />
      </ImageContainer>
      <Details>
        <Title data-cy="BlogTitle">{item.title}</Title>
        <Date>{item.date}</Date>
        <Description>{item.description}</Description>
        <MetaContainer>
          {item.tags &&
            item.tags.map((category) => (
              <Tags
                key={category}
                className="py-1 my-2"
                size="sm"
                text={category}
              />
            ))}
        </MetaContainer>
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

const Details = tw.div`p-6 lg:block lg:text-left`;

const Description = tw.p`font-body my-2`;

const Title = tw.h5`mt-4 leading-snug font-header font-bold text-lg pb-1`;

const MetaContainer = tw.div`flex flex-wrap items-center leading-none my-5`;

const Date = tw.p` my-2`;

export default BlogCard;
