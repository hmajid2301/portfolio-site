import React from 'react';
import { FaSearch as Search } from 'react-icons/fa';
import tw from 'twin.macro';

export interface Props {
  /** The background of icon. */
  background: string;
  /** The color of icon. */
  color: string;
  /** Extra classes. */
  className: string;
}

const SearchIcon = ({ background, color, className }: Props) => (
  <Icon
    className={`bg-${background} hover:bg-${color} text-${color} hover:text-${background} ${className}`}
    data-testid="Icon"
    type="button"
  >
    <Search size="1em" />
  </Icon>
);

const Icon = tw.button`p-4 rounded-full bg-opacity-25 transition duration-300`;

export default SearchIcon;
