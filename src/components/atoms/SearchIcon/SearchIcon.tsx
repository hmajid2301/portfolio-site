import React from 'react';
import { FaSearch as Search } from 'react-icons/fa';
import tw from 'twin.macro';

export interface Props {
  /** The color of icon. */
  color: string;
  /** The color of icon on hover. */
  hoverColor?: string;
}

const SearchIcon = ({ color, hoverColor }: Props) => (
  <Icon
    className={`text-${color} hover:text-${hoverColor}`}
    data-testid="Icon"
    type="button"
  >
    <Search size="1em" />
  </Icon>
);

const Icon = tw.button`p-4 transition duration-300 inline-block`;

export default SearchIcon;
