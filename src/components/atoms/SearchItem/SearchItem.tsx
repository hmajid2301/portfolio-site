import { Link } from 'gatsby';
import React from 'react';
import Highlighter from 'react-highlight-words';
import tw from 'twin.macro';

export interface Props {
  /** The excerpt for the search results. */
  content: string;
  /** Path to the blog post. */
  path: string;
  /** Title of the blog post. */
  title: string;
  /** The query made, used for highlighting. */
  query: string;
}

const SearchItem = ({ content, path, title, query }: Props) => (
  <SearchItemContainer data-cy="SearchItem">
    <SearchTitle>
      <Link
        className="hover:text-white hover:bg-primary hover:p-1 rounded"
        to={path}
      >
        <Highlighter
          autoEscape
          highlightStyle={{ backgroundColor: '#ffd54f' }}
          searchWords={query.split(' ')}
          textToHighlight={title}
        />
      </Link>
    </SearchTitle>
    <MainText>
      <Highlighter
        autoEscape
        highlightStyle={{ backgroundColor: '#ffd54f' }}
        searchWords={query.split(' ')}
        textToHighlight={`${content.substring(0, 200)}...`}
      />
    </MainText>
    <ReadMore className="hover:text-primary text-lg py-2" type="button">
      <Link to={path}>Read More</Link>
    </ReadMore>
  </SearchItemContainer>
);

const SearchItemContainer = tw.div`my-10`;

const SearchTitle = tw.h2`font-header text-2xl font-semibold`;

const MainText = tw.p`font-body`;

const ReadMore = tw.button`hover:text-primary text-lg py-2`;

export default SearchItem;
