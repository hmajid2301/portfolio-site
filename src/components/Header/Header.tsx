import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { TiThMenu as MenuIcon } from 'react-icons/ti';
import { RiCloseLine as CloseIcon } from 'react-icons/ri';
import React from 'react';
import tw from 'twin.macro';

import useAnimatedNavToggler from '~/helpers/useAnimatedNavToggler';

export interface Props {
  /** When the nav bar should break and become a mobile nav bar. */
  collapseBreakpointClass?: 'sm' | 'md' | 'lg' | 'xl';
  /** The colour when you hover over the nav bar links. */
  hoverColor?: string;
  /** The logo component to display on the left hand side of the nav bar. */
  logo: React.ReactNode;
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

const HeaderContainer = tw.header`flex justify-between items-center max-w-screen-xl mx-auto font-header`;

const DesktopNavLinks = tw.nav`hidden lg:flex flex-1 justify-between items-center`;

const NavLinks = styled.div`
  ${tw`inline-block`}
`;

const LogoContainer = styled(Link)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;

const MobileNavLinks = motion.custom(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}

  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-blue-500 transition duration-300
`;

const getNavLink = (links: string[], hoverColor: string) => {
  const NavLink = links.map(link => (
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

const Header = ({
  collapseBreakpointClass = 'lg',
  hoverColor = 'blue-500',
  logo,
  links,
}: Props) => {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseClass[collapseBreakpointClass];

  return (
    <HeaderContainer>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        <LogoContainer to="/">{logo}</LogoContainer>
        <NavLinks key={1}>{getNavLink(links, hoverColor)}</NavLinks>
      </DesktopNavLinks>

      <MobileNavLinksContainer
        css={collapseBreakpointCss.mobileNavLinksContainer}
      >
        <LogoContainer to="/">{logo}</LogoContainer>
        <MobileNavLinks
          initial={{ x: '150%', display: 'none' }}
          animate={animation}
          css={collapseBreakpointCss.mobileNavLinks}
        >
          <NavLinks key={1}>{getNavLink(links, hoverColor)}</NavLinks>
        </MobileNavLinks>
        <NavToggle
          onClick={toggleNavbar}
          className={showNavLinks ? 'open' : 'closed'}
        >
          {showNavLinks ? (
            <CloseIcon tw="w-6 h-6" />
          ) : (
            <MenuIcon tw="w-6 h-6" />
          )}
        </NavToggle>
      </MobileNavLinksContainer>
    </HeaderContainer>
  );
};

export default Header;
