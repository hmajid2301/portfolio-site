import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { TiThMenu as MenuIcon } from 'react-icons/ti';
import { RiCloseLine as CloseIcon } from 'react-icons/ri';
import React from 'react';
import tw from 'twin.macro';

import useAnimatedNavToggler from '~/helpers/useAnimatedNavToggler';

export interface Props {
  /** The background color of the header. */
  background?: string;
  /** When the nav bar should break and become a mobile nav bar. */
  collapseBreakpointClass?: 'sm' | 'md' | 'lg' | 'xl';
  /** The colour when you hover over the nav bar links. */
  hoverColor?: string;
  /** The logo component to display on the left hand side of the nav bar. */
  logo: React.ReactNode;
  /** The colour of the links text. */
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
        role="navigation"
        aria-label="nav"
        css={collapseBreakpointCss.desktopNavLinks}
      >
        {Logo}
        <NavLinks>{getNavLink(links, hoverColor)}</NavLinks>
      </DesktopNavLinks>

      <MobileNavContainer className={`${collapseBreakpointClass}:hidden `}>
        {Logo}
        <MobileNavLinksContainer
          css={collapseBreakpointCss.mobileNavLinksContainer}
        >
          <MobileNavLinks
            initial={{ x: '150%', display: 'none' }}
            animate={animation}
            css={collapseBreakpointCss.mobileNavLinks}
          >
            <NavLinks>{getMobileNavLink(links, hoverColor)}</NavLinks>
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
        </MobileNavLinksContainer>
      </MobileNavContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = tw.header`flex justify-between items-center max-w-screen-xl mx-auto font-header w-full`;

const DesktopNavLinks = tw.nav`hidden lg:flex lg:flex-wrap justify-between items-center w-full`;

const LogoContainer = styled(Link)`
  ${tw`flex items-center border-b-0 ml-0!`};
`;

const NavLinks = styled.div`
  ${tw`inline-block`}
`;

const getNavLink = (links: string[], hoverColor: string) => {
  const NavLink = links.map((link) => (
    <Link
      className={`text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300
      pb-1 border-b-2 border-transparent hover:border-${hoverColor} hocus:text-${hoverColor} hover:text-${hoverColor}`}
      to={`/${link}`}
      key={link}
    >
      {link}
    </Link>
  ));

  return NavLink;
};

const MobileNavContainer = tw.div`flex flex-wrap w-full justify-between lg:hidden`;

const MobileNavLinksContainer = tw.nav`flex`;

const MobileNavLinks = motion.custom(styled.div`
  ${tw`fixed top-0 left-0 inset-x-0 p-8 max-h-full`}

  ${NavLinks} {
    ${tw`flex flex-col items-start`}
  }
`);

const NavToggle = tw.button`z-10 lg:hidden focus:outline-none transition duration-300`;

const getMobileNavLink = (links: string[], hoverColor: string) => {
  const NavLink = links.map((link) => (
    <Link
      className={`text-lg my-2 font-semibold tracking-wide transition duration-100
      pb-1 hocus:text-${hoverColor} hover:text-${hoverColor}`}
      to={`/${link}`}
      key={link}
    >
      {link}
    </Link>
  ));

  return NavLink;
};

export default Header;
