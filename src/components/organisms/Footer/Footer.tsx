import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

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
        <LinksContainer>
          {links.map((link) => (
            <FooterLink
              key={link}
              aria-label={`Opens link to ${link} page`}
              className={`hover:text-${hoverColor} hover:border-${hoverColor}`}
              to={`/${link}`}
            >
              {link}
            </FooterLink>
          ))}
        </LinksContainer>
        <SocialLinksContainer>
          {socialButtons.map((button) => (
            <SocialLink
              key={button.url}
              aria-label={`Opens link to ${button.icon} page`}
              className={`hover:text-${hoverColor} text-${color}`}
              data-testid={`Button-${button.url}`}
              href={button.url}
              target="_blank"
            >
              {button.icon}
            </SocialLink>
          ))}
        </SocialLinksContainer>
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

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;

const FooterLink = styled(Link)`
  ${tw`border-b-2 border-transparent pb-1 transition duration-300 md:mt-2 md:mx-4`}
`;

const SocialLinksContainer = tw.div`mt-10`;

const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block transition duration-300 mx-4`}

  svg {
    ${tw`w-10 h-10`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm`;

export default Footer;
