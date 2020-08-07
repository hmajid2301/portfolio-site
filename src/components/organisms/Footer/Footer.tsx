import React from 'react';
import tw from 'twin.macro';

import { Links } from '~/components/molecules/Links';
import { SocialLinks } from '~/components/molecules/SocialLinks';

export type SocialButton = {
  icon: React.ReactNode;
  url: string;
};

export interface Props {
  links: {
    /** The name of the link to show. */
    name: string;
    /** Where to link to on the website. */
    link: string;
  }[];
  socialButtons: SocialButton[];
}

const Footer = ({ links, socialButtons }: Props) => (
  <Container>
    <Content>
      <Row>
        <Links links={links} />
        <SocialLinks buttons={socialButtons} />
        <CopyrightText>
          &copy; Copyright 2020, Haseeb Majid. All Rights Reserved.
        </CopyrightText>
      </Row>
    </Content>
  </Container>
);

const Container = tw.footer`bg-secondary-background font-header`;

const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const CopyrightText = tw.p`font-body text-center mt-10 tracking-wide text-sm text-main`;

export default Footer;
