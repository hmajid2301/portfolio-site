import React from 'react';
import tw from 'twin.macro';

import { BlogCard, BlogItem } from '~/components/molecules/BlogCard';

export interface Props {
  data: BlogItem[];
}

const BlogList = ({ data }: Props) => {
  return (
    <BlogRowContainer>
      {data.map((blogItem) => (
        <BlogCard
          key={blogItem.title}
          className="w-full xl:w-1/3"
          item={blogItem}
        />
      ))}
    </BlogRowContainer>
  );
};

const BlogRowContainer = tw.div`flex items-center justify-between`;

export default BlogList;
