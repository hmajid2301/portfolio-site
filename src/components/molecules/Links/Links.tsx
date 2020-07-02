import React from 'react';
import tw from 'twin.macro';

import { NavLink } from '~/components/atoms/NavLink';

export type SocialButton = {
  icon: React.ReactNode;
  url: string;
};

export interface Props {
  /** The color main text on the footer. */
  color?: string;
  /** The color on hover text of the footer. */
  hoverColor?: string;
  /** The links to show on the footer. */
  links: string[];
}

const Links = ({
  color = 'gray-700',
  hoverColor = 'blue-500',
  links,
}: Props) => (
  <LinksContainer>
    {links.map((link) => (
      <NavLink
        key={link}
        aria-label={`Opens link to ${link} page`}
        color={color}
        hoverColor={hoverColor}
        link={link}
      />
    ))}
  </LinksContainer>
);

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;

export default Links;
