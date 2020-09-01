import React from 'react';
import tw from 'twin.macro';

import { BlogCard, BlogItem } from '~/components/molecules/BlogCard';

export interface Props {
  data: BlogItem[];
}

const BlogList = ({ data }: Props) => {
  return (
    <BlogCardsContainer>
      <BlogCards>
        {data.map((blogItem) => (
          <BlogCard key={blogItem.title} item={blogItem} />
        ))}
      </BlogCards>
    </BlogCardsContainer>
  );
};

const BlogCardsContainer = tw.div`flex justify-center items-center xl:block`;

const BlogCards = tw.div`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4`;

export default BlogList;
