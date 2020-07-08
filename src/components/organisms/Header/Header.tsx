import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import { RiCloseLine as CloseIcon } from 'react-icons/ri';
import { TiThMenu as MenuIcon } from 'react-icons/ti';
import tw from 'twin.macro';

import { Links } from '~/components/molecules/Links';
import { SearchBar } from '~/components/molecules/SearchBar';
import { ThemeIcons } from '~/components/molecules/ThemeIcons';
import useAnimatedNavToggler from '~/helpers/useAnimatedNavToggler';

export interface Props {
  /** The background color of the header. */
  background?: string;
  /** When the nav bar should break and become a mobile nav bar. */
  collapseBreakpointClass?: 'sm' | 'md' | 'lg' | 'xl';
  /** The color when you hover over the nav bar links. */
  hoverColor?: string;
  /** The logo component to display on the left hand side of the nav bar. */
  logo: React.ReactNode;
  /** The color of the links text. */
  linkColor?: string;
  /** The links to show on the nav bar. */
  links: string[];
}

const collapseClass = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};

const Header = ({
  background = 'white',
  collapseBreakpointClass = 'lg',
  hoverColor = 'blue-500',
  logo,
  linkColor = 'black',
  links,
}: Props) => {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseClass[collapseBreakpointClass];
  const Logo = <LogoContainer to="/">{logo}</LogoContainer>;

  return (
    <HeaderContainer
      className={`text-${linkColor} bg-${background}`}
      data-testid="Header"
    >
      <DesktopNavLinks
        aria-label="nav"
        css={collapseBreakpointCss.desktopNavLinks}
        role="navigation"
      >
        {Logo}
        <SearchBar
          background="gray-200"
          color={linkColor}
          hoverColor={hoverColor}
        />
        <Links
          color="black"
          hoverColor={hoverColor}
          linkClassName="text-base md:text-lg my-2 lg:mx-6 lg:my-0 font-semibold"
          links={links}
        />
        <ThemeIcons color={linkColor} hover={hoverColor} />
      </DesktopNavLinks>

      <MobileNavContainer className={`${collapseBreakpointClass}:hidden `}>
        {Logo}
        <MobileNavLinks
          animate={animation}
          className={`bg-${background}`}
          css={collapseBreakpointCss.mobileNavLinks}
          initial={{ x: '150%', display: 'none' }}
        >
          <Links
            color="black"
            hoverColor={hoverColor}
            linkClassName="text-lg my-2 font-extrabold tracking-wide transition border-transparent"
            links={links}
          />
        </MobileNavLinks>
        <NavToggle
          className={`hocus:text-${hoverColor} ${
            showNavLinks ? 'open' : 'closed'
          }`}
          onClick={toggleNavbar}
          type="button"
        >
          {showNavLinks ? (
            <CloseIcon className="w-5 h-5" />
          ) : (
            <MenuIcon className="w-5 h-5" />
          )}
        </NavToggle>
      </MobileNavContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = tw.header`flex justify-between items-center font-header w-full`;

const DesktopNavLinks = tw.nav`hidden md:flex md:flex-wrap justify-between items-center w-full`;

const LogoContainer = styled(Link)`
  ${tw`flex items-center border-b-0 ml-0!`};
`;

const MobileNavContainer = tw.div`flex flex-wrap w-full justify-between md:hidden`;

const MobileNavLinks = motion.custom(styled.div`
  ${tw`md:hidden z-10 fixed top-0 inset-x-0 mx-2 mx-2 p-8 border text-center rounded-lg text-gray-900 `}
`);

const NavToggle = tw.button`z-10 md:hidden focus:outline-none transition duration-300`;

export default Header;
