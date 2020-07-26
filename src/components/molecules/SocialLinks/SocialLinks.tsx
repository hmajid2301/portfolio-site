import React from 'react';
import tw from 'twin.macro';

import { SocialLink } from '~/components/atoms/SocialLink';

export type SocialButton = {
  icon: React.ReactNode;
  url: string;
};

export interface Props {
  /** The social links. */
  links: SocialButton[];
}

const SocialLinks = ({ links }: Props) => (
  <SocialLinksContainer>
    {links.map((button) => (
      <LinkContainer key={button.url}>
        <SocialLink icon={button.icon} url={button.url} />
      </LinkContainer>
    ))}
  </SocialLinksContainer>
);

const SocialLinksContainer = tw.div`mt-10`;

const LinkContainer = tw.span`mx-4`;

export default SocialLinks;
