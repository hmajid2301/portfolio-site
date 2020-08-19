import React from 'react';
import tw from 'twin.macro';

import { SocialLink } from '~/components/molecules/SocialLink';

export type SocialButton = {
  icon: string;
  url: string;
};

export interface Props {
  /** The social links. */
  buttons: SocialButton[];
}

const SocialLinks = ({ buttons }: Props) => (
  <SocialLinksContainer>
    {buttons.map((button) => (
      <LinkContainer key={button.url}>
        <SocialLink icon={button.icon} url={button.url} />
      </LinkContainer>
    ))}
  </SocialLinksContainer>
);

const SocialLinksContainer = tw.div`mt-10`;

const LinkContainer = tw.span`mx-4`;

export default SocialLinks;
