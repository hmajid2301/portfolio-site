import React from 'react';
import tw from 'twin.macro';

import { BlogCard, BlogItem } from '~/components/molecules/BlogCard';
import chunkData from '~/helpers/chunkData';

export interface Props {
  /** The background color of post. */
  background?: string;
  /** The color of main text. */
  color?: string;
  /** The blog to show in the post. */
  data: BlogItem[];
  /** The text color of the main text. */
  textColor?: string;
}

const BlogList = ({
  background = 'gray-100',
  color = 'blue-500',
  textColor = 'gray-700',
  data: blogItems,
}: Props) => {
  const data: BlogItem[][] = chunkData(blogItems, 2);

  return (
    <div>
      {data.map((blogRow) => (
        <BlogRow
          background={background}
          color={color}
          data={blogRow}
          textColor={textColor}
        />
      ))}
    </div>
  );
};

const BlogRow = ({ background, color, data, textColor }: Props) => {
  const blogRow = data.map((blogItem: BlogItem) => (
    <BlogCardContainer key={blogItem.title}>
      <BlogCard
        background={background}
        color={color}
        item={blogItem}
        textColor={textColor}
      />
    </BlogCardContainer>
  ));

  return <BlogRowContainer>{blogRow}</BlogRowContainer>;
};

const BlogRowContainer = tw.div`flex flex-col md:flex-row items-center`;

const BlogCardContainer = tw.div`m-4`;

export default BlogList;
