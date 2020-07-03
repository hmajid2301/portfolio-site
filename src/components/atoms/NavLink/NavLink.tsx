import { Link } from 'gatsby';
import React from 'react';

export interface Props {
  /** Extra CSS classes to assign to this component. */
  className?: string;
  /** The color of the link text. */
  color: string;
  /** The colour when you hover over the links. */
  hoverColor: string;
  /** The link text. */
  link: string;
}

const NavLink = ({ color, className, hoverColor, link }: Props) => (
  <Link
    className={`border-b-2 border-transparent pb-1 transition duration-300 hover:border-${hoverColor} hover:text-${hoverColor} text-${color} ${className}`}
    to={`/${link}`}
  >
    {link}
  </Link>
);

export default NavLink;
