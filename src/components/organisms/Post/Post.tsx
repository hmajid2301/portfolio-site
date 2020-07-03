import React from 'react';
import tw from 'twin.macro';

import { ProgramTags } from '~/components/atoms/ProgramTags';

export interface Props {
  /** The color of the text and social links. */
  color?: string;
  /** The data of the blog post. */
  date: string;
  /** The color on hover of the social links. */
  hoverColor?: string;
  /** The tags/categories related to this blog post. */
  tags: string[];
  /** The title of this blog post. */
  title: string;
  /** The url to share with the social links. */
  url: string;
}

const Post = ({
  color = 'gray-800',
  date,
  hoverColor = 'blue-500',
  tags,
  title,
}: Props) => (
  <Container className={`text-${color} text-center`}>
    <Date>{date}</Date>
    <Title>{title}</Title>
    <ListContainer>
      {tags.map((category) => (
        <Item>
          <ProgramTags key={category} text={category} />
        </Item>
      ))}
    </ListContainer>
  </Container>
);

const Container = tw.div`flex flex-col mx-auto max-w-2xl my-20 font-body`;

const Date = tw.div`text-base md:text-xl mb-3 italic`;

const Title = tw.div`text-4xl md:text-6xl mb-3 font-thin`;

const ListContainer = tw.div`flex flex-row justify-center mb-4`;

const Item = tw.span`mr-1`;

export default Post;
