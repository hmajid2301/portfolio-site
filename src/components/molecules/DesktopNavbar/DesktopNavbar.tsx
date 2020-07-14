import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { Logo } from '~/components/atoms/Logo';
import { Links } from '~/components/molecules/Links';
import { SearchBar } from '~/components/molecules/SearchBar';
import { ThemeIcons } from '~/components/molecules/ThemeIcons';

export interface Props {
  /** The background color of the header. */
  background?: string;
  /** The color of the links text. */
  color?: string;
  /** The color when you hover over the nav bar links. */
  hoverColor?: string;
  /** The links to show in the navigation bar */
  links: string[];
}

const DesktopNavbar = ({
  background = 'white',
  color = 'black',
  hoverColor = 'blue-500',
  links,
}: Props) => (
  <Navbar
    aria-label="nav"
    className={`text-${color} bg-${background}`}
    role="navigation"
  >
    <LogoContainer to="/">
      <Logo
        accent="gray-500"
        color={color}
        hoverColor={hoverColor}
        text="Haseeb"
      />
    </LogoContainer>
    <SearchBar background="gray-200" color={color} hoverColor={hoverColor} />
    <Links
      color="black"
      hoverColor={hoverColor}
      linkClassName="text-base lg:text-base xl:text-lg my-2 lg:mx-4 xl:md-6 lg:my-0 font-semibold"
      links={links}
    />
    <ThemeIcons color={color} hover={hoverColor} />
  </Navbar>
);

const Navbar = tw.nav`hidden lg:flex items-center justify-between w-full space-x-4 md:space-x-8 shadow p-4`;

const LogoContainer = styled(Link)`
  ${tw`border-b-0 ml-0!`};
`;

export default DesktopNavbar;
