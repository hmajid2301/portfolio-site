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
        <BlogCard key={blogItem.title} item={blogItem} />
      ))}
    </BlogRowContainer>
  );
};

const BlogRowContainer = tw.div`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4`;

export default BlogList;
