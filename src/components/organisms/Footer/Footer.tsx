import React from 'react';
import tw from 'twin.macro';

import { Links } from '~/components/molecules/Links';
import { SocialLinks } from '~/components/molecules/SocialLinks';

export type SocialButton = {
  icon: React.ReactNode;
  url: string;
};

export interface Props {
  /** The background color of the footer. */
  background?: string;
  /** The color main text on the footer. */
  color?: string;
  /** The color on hover text of the footer. */
  hoverColor?: string;
  /** The links to show on the footer. */
  links: string[];
  /** The social buttons to show on the footer. */
  socialButtons: SocialButton[];
}

const Footer = ({
  background = 'gray-100',
  color = 'gray-700',
  hoverColor = 'blue-500',
  links,
  socialButtons,
}: Props) => (
  <Container
    className={`bg-${background} text-${color}`}
    data-testid="Container"
  >
    <Content>
      <Row>
        <Links color={color} hoverColor={hoverColor} links={links} />
        <SocialLinks
          color={color}
          hoverColor={hoverColor}
          links={socialButtons}
        />
        <CopyrightText>
          &copy; Copyright 2020, Haseeb Majid. All Rights Reserved.
        </CopyrightText>
      </Row>
    </Content>
  </Container>
);

const Container = tw.div`-mx-4 md:-mx-8 -mb-8 font-header`;

const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm`;

export default Footer;
