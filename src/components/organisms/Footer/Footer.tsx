import React from 'react';
import tw from 'twin.macro';

import { Links } from '~/components/molecules/Links';
import { SocialLinks } from '~/components/molecules/SocialLinks';
import config from '~/config/config.json';

export type SocialButton = {
  /** The icon name. i.e. github. */
  icon: string;
  /** The url to go to when the icon is pressed. */
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
  <FooterContainer data-cy="Footer">
    <FooterContent>
      <Row>
        <Links label="navigation bar in footer" links={links} />
        <SocialLinks buttons={socialButtons} />
        <CopyrightText>
          &copy; Copyright 2020, {config.siteData.author}. All Rights Reserved.
          <br />
          Contact me at{' '}
          <a href={`mailto:${config.siteData.email}`}>
            {config.siteData.email}
          </a>
        </CopyrightText>
      </Row>
    </FooterContent>
  </FooterContainer>
);

const FooterContainer = tw.footer`bg-background-alt font-header`;

const FooterContent = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const CopyrightText = tw.p`font-body text-center mt-10 tracking-wide text-sm text-main`;

export default Footer;
