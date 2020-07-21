import React from 'react';
import {
  AiFillGithub as Github,
  AiFillGitlab as Gitlab,
  AiFillMediumCircle as Medium,
} from 'react-icons/ai';
import { FaDev as Dev } from 'react-icons/fa';
import { GoKey as Key } from 'react-icons/go';
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
}

const Footer = ({
  background = 'gray-100',
  color = 'gray-700',
  hoverColor = 'blue-500',
}: Props) => {
  const links = ['Home', 'Blog', 'Projects', 'Open Source'];
  const socialButtons: SocialButton[] = [
    {
      icon: <Github />,
      url: 'https://github.com/hmajid2301',
    },
    {
      icon: <Gitlab />,
      url: 'https://gitlab.com/hmajid2301',
    },
    {
      icon: <Medium />,
      url: 'https://medium.com/@hmajid2301',
    },
    {
      icon: <Dev />,
      url: 'https://dev.to/hmajid2301',
    },
    {
      icon: <Key />,
      url: '/static/public.gpg',
    },
  ];

  return (
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
};

const Container = tw.footer`-mx-4 md:-mx-8 -mb-8 font-header`;

const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm`;

export default Footer;
