import { Link } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

export interface Props {
  content: string;
  path: string;
  title: string;
}

const SearchItem = ({ content, path, title }: Props) => (
  <SearchItemContainer>
    <SearchTitle>
      <Link
        className="hover:text-white hover:bg-primary hover:p-1 rounded"
        to={`/blog/${path}`}
      >
        {title}
      </Link>
    </SearchTitle>
    <MainText>{content.substring(0, 200)}...</MainText>
    <ReadMore className="hover:text-primary text-lg py-2" type="button">
      <Link to={`/blog/${path}`}>Read More</Link>
    </ReadMore>
  </SearchItemContainer>
);

const SearchItemContainer = tw.div`my-10`;

const SearchTitle = tw.h2`font-header text-2xl font-semibold`;

const MainText = tw.p`font-body`;

const ReadMore = tw.button`hover:text-primary text-lg py-2`;

export default SearchItem;
