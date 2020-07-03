import styled from '@emotion/styled';
import React from 'react';
import tw from 'twin.macro';

export interface Props {
  /** Extra CSS classes to assign to this component. */
  className?: string;
  /** The color of the link text. */
  color: string;
  /** The colour when you hover over the links. */
  hoverColor: string;
  /** The social Icon to show. */
  icon: React.ReactNode;
  /** The url to link to when the social link is pressed. */
  url: string;
}

const SocialLink = ({ color, hoverColor, icon, url }: Props) => (
  <Container
    key={url}
    aria-label={`Opens link to ${icon} page`}
    className={`hover:text-${hoverColor} text-${color}`}
    data-testid={`Button-${url}`}
    href={url}
    target="_blank"
  >
    {icon}
  </Container>
);

const Container = styled.a`
  ${tw`cursor-pointer inline-block transition duration-300`}

  svg {
    ${tw`w-10 h-10`}
  }
`;

export default SocialLink;
