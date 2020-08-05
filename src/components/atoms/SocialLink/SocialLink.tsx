import styled from '@emotion/styled';
import React from 'react';
import tw from 'twin.macro';

export interface Props {
  /** Extra CSS classes to assign to this component. */
  className?: string;
  /** The social Icon to show. */
  icon: React.ReactNode;
  /** The url to link to when the social link is pressed. */
  url?: string;
}

const SocialLink = ({ icon, url }: Props) => (
  <SocialLinkContainer
    key={url}
    aria-label={`Opens link to ${icon} page`}
    data-cy="SocialLink"
    href={url}
    rel="noreferrer"
    target="_blank"
  >
    {icon}
  </SocialLinkContainer>
);

const SocialLinkContainer = styled.a`
  ${tw`cursor-pointer inline-block transition duration-300 text-main hover:text-primary`}

  svg {
    ${tw`w-10 h-10`}
  }
`;

export default SocialLink;
