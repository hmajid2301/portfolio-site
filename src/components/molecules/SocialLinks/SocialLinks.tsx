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
      <SocialLink
        color={color}
        data-testid={`Button-${button.url}`}
        hoverColor={hoverColor}
        icon={button.icon}
        url={button.url}
      />
    ))}
  </SocialLinksContainer>
);

const SocialLinksContainer = tw.div`mt-10`;
export default SocialLinks;
