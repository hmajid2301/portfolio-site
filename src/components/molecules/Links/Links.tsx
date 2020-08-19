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
  /** Unique aria-label for this a11y. */
  label?: string;
  /** Extra CSS classes to assign to this link component. */
  linkClassName?: string;
  /** The links to show on the footer. */
  links: {
    /** The name of the link to show. */
    name: string;
    /** Where to link to on the website. */
    link: string;
  }[];
}

const Links = ({ className, linkClassName, label, links }: Props) => (
  <LinksContainer aria-label={label} className={className}>
    {links.map((link) => (
      <NavLink
        key={link.link}
        className={`mx-3 my-2 ${linkClassName}`}
        link={link}
      />
    ))}
  </LinksContainer>
);

const LinksContainer = tw.nav`flex items-center justify-center flex-col lg:flex-row`;

export default Links;
