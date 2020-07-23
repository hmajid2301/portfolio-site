import React from 'react';
import tw from 'twin.macro';

import { SocialLink } from '~/components/atoms/SocialLink';

export type SocialButton = {
  icon: React.ReactNode;
  url: string;
};

export interface Props {
  /** The color of the social links. */
  color?: string;
  /** The color on hover on social links. */
  hoverColor?: string;
  /** The social links. */
  links: SocialButton[];
}

const SocialLinks = ({
  color = 'gray-700',
  hoverColor = 'blue-500',
  links,
}: Props) => (
  <SocialLinksContainer>
    {links.map((button) => (
      <LinkContainer key={button.url}>
        <SocialLink
          color={color}
          data-testid={`Button-${button.url}`}
          hoverColor={hoverColor}
          icon={button.icon}
          url={button.url}
        />
      </LinkContainer>
    ))}
  </SocialLinksContainer>
);

const SocialLinksContainer = tw.div`mt-10`;
const LinkContainer = tw.span`mx-4`;
export default SocialLinks;
