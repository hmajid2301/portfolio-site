import { Link } from 'gatsby';
import React from 'react';

export interface Props {
  /** The color of the link text. */
  color: string;
  /** The colour when you hover over the links. */
  hoverColor: string;
  /** The link text. */
  link: string;
}

const NavLink = ({ color, hoverColor, link }: Props) => (
  <Link
    className={`border-b-2 border-transparent pb-1 transition duration-300 hover:border-${hoverColor} hover:text-${hoverColor} text-${color}`}
    to={`/${link}`}
  >
    {link}
  </Link>
);

export default NavLink;
