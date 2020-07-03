import React from 'react';
import tw from 'twin.macro';

import { NavLink } from '~/components/atoms/NavLink';

export type SocialButton = {
  icon: React.ReactNode;
  url: string;
};

export interface Props {
  /** Extra CSS classes to assign to this container component. */
  className?: string;
  /** The color main text on the footer. */
  color?: string;
  /** The color on hover text of the footer. */
  hoverColor?: string;
  /** Extra CSS classes to assign to this link component. */
  linkClassName?: string;
  /** The links to show on the footer. */
  links: string[];
}

const Links = ({
  className,
  color = 'gray-700',
  hoverColor = 'blue-500',
  linkClassName,
  links,
}: Props) => (
  <LinksContainer className={className}>
    {links.map((link) => (
      <NavLink
        key={link}
        aria-label={`Opens link to ${link} page`}
        className={`mt-2 mx-4 ${linkClassName}`}
        color={color}
        hoverColor={hoverColor}
        link={link}
      />
    ))}
  </LinksContainer>
);

const LinksContainer = tw.div`font-medium flex flex-wrap justify-center items-start md:items-center flex-col md:flex-row md:mt-8`;

export default Links;
