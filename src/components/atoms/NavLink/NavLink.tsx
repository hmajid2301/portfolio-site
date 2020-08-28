import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

export interface Props {
  /** Extra CSS classes to assign to this component. */
  className?: string;
  /** The links to show on the footer. */
  link: {
    /** The name of the link to show. */
    name: string;
    /** Where to link to on the website. */
    link: string;
  };
}

const NavLink = ({ className, link }: Props) => (
  <LinkElement
    activeClassName="active"
    aria-label={`Opens link to ${link.name} page`}
    className={`text-header ${className}`}
    to={`${link.link}`}
  >
    {link.name}
  </LinkElement>
);

const LinkElement = styled(Link)`
  &:hover {
    &:after {
      ${tw`opacity-100`}
      transform: translateY(0);
    }
  }

  &:after {
    ${tw`block opacity-0 border-b-4 border-primary`};
    content: '';
    transition: transform 0.4s, opacity 0.4s;
    transform: translateY(10px);
  }
`;

export default NavLink;
