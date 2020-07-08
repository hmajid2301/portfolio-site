import React from 'react';
import { FaSearch as Search } from 'react-icons/fa';
import tw from 'twin.macro';

import { Icon } from '~/components/atoms/Icon';
import { Input } from '~/components/atoms/Input';

export interface Props {
  /** The background of bar. */
  background: string;
  /** The color of text/icon in the bar. */
  color: string;
  /** The color when you hover/focus in the text input. */
  hoverColor?: string;
}

const SearchBar = ({ background, color, hoverColor }: Props) => {
  return (
    <SearchContainer data-testid="SearchBar">
      <Icon
        background={background}
        color={color}
        hoverColor={hoverColor}
        icon={<Search size="1em" />}
      />
      <Input background={background} color={color} placeholder="Search" />
    </SearchContainer>
  );
};

const SearchContainer = tw.div`flex flex-grow text-left h-12 text-lg focus-within:shadow-outline`;

export default SearchBar;
