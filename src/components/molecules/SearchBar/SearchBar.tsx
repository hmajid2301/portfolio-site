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
  /** Function to call when the input is out of focused. */
  onBlur?: () => void;
}

const SearchBar = ({ background, color, hoverColor, onBlur }: Props) => {
  return (
    <SearchContainer data-testid="SearchBar">
      <Icon
        background={background}
        color={color}
        hoverColor={hoverColor}
        icon={<Search size="1em" />}
        label="Search Icon"
      />
      <Input
        background={background}
        color={color}
        label="Search"
        onBlur={onBlur}
        placeholder="Search"
      />
    </SearchContainer>
  );
};

const SearchContainer = tw.div`flex flex-grow text-left h-12 text-lg focus-within:shadow-outline`;

export default SearchBar;
