import { FluidObject } from 'gatsby-image';
import React from 'react';
import tw from 'twin.macro';

import { Icon } from '~/components/atoms/Icon';
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
      <Title>
        <Icon className="mr-2" icon="code" />
        {title}
      </Title>
      <Row>
        <Text>
          <Icon className="mr-2" icon="calendar" />
          {date}
        </Text>
        <Text>
          <Icon className="mr-2" icon="hourglass" /> {readingTime} / {words}{' '}
          words
        </Text>
      </Row>
      {tags && (
        <ListContainer>
          <Icon className="mr-2" icon="tag" />
          {tags.map((category) => (
            <Item key={category}>
              <ProgramTags key={category} size="sm" text={category} />
            </Item>
          ))}
        </ListContainer>
      )}
    </MetaContainer>
  );
};

const MetaContainer = tw.section`flex flex-col my-10 font-body text-main items-center`;

const Title = tw.div`text-3xl mt-10 mb-4 font-header text-center`;

const Text = tw.div`text-base my-2 mx-4`;

const Row = tw.div`flex flex-row justify-between`;

const ListContainer = tw.div`flex justify-center items-center flex-wrap mt-5 mb-10`;

const Item = tw.span`mt-4 lg:mr-1`;

export default PostMeta;
