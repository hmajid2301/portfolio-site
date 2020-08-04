import { FluidObject } from 'gatsby-image';
import React from 'react';
import tw from 'twin.macro';

import { ProgramTags } from '~/components/atoms/ProgramTags';

export interface Props {
  /** Cover Image for the article. */
  coverImage?: FluidObject;
  /** The data of the blog post. */
  date: string;
  /** How long it'll take to finish the article. */
  readingTime?: string;
  /** The tags/categories related to this blog post. */
  tags?: string[];
  /** The title of this blog post. */
  title: string;
  /** The number of words in the article. */
  words?: string;
}

const PostMeta = ({
  coverImage,
  date,
  readingTime,
  tags,
  title,
  words,
}: Props) => {
  return (
    <MetaContainer>
      <img alt="Cover for article." loading="lazy" src={coverImage?.srcWebp} />
      <Title>{title}</Title>
      <Date>Date Published: {date}</Date>
      <Date>
        {readingTime} / {words} words
      </Date>
      {tags && (
        <ListContainer>
          {tags.map((category) => (
            <Item key={category}>
              <ProgramTags key={category} text={category} />
            </Item>
          ))}
        </ListContainer>
      )}
    </MetaContainer>
  );
};

const MetaContainer = tw.section`flex flex-col my-10 font-body text-main items-center`;

const Title = tw.div`text-3xl mt-10 mb-4 font-header`;

const Date = tw.div`text-base my-2`;

const ListContainer = tw.div`flex flex-wrap mt-5 mb-10`;

const Item = tw.span`mt-4 lg:mr-1`;

export default PostMeta;
