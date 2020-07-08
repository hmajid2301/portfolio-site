import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import { RiCloseLine as CloseIcon } from 'react-icons/ri';
import { TiThMenu as MenuIcon } from 'react-icons/ti';
import tw from 'twin.macro';

import { Logo } from '~/components/atoms/Logo';
import { Links } from '~/components/molecules/Links';
import { SearchBar } from '~/components/molecules/SearchBar';
import { ThemeIcons } from '~/components/molecules/ThemeIcons';
import useAnimatedNavToggler from '~/helpers/useAnimatedNavToggler';

export interface Props {
  /** The background color of the header. */
  background?: string;
  /** The color when you hover over the nav bar links. */
  hoverColor?: string;
  /** The color of the links text. */
  color?: string;
  /** The links to show in the navigation bar */
  links: string[];
}

const MobileNavbar = ({
  background = 'white',
  hoverColor = 'blue-500',
  color = 'black',
  links,
}: Props) => {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();

  return (
    <MobileNavContainer>
      <MobileNavLinks
        animate={animation}
        className={`text-${color} bg-${background}`}
        initial={{ x: '150%', display: 'none' }}
      >
        <LogoContainer to="/">
          <Logo
            accent="gray-500"
            color={color}
            hoverColor={hoverColor}
            text="Haseeb"
          />
        </LogoContainer>
        <SearchBar
          background="gray-200"
          color={color}
          hoverColor={hoverColor}
        />
        <Links
          color="black"
          hoverColor={hoverColor}
          linkClassName="text-lg my-2 font-extrabold tracking-wide transition border-transparent"
          links={links}
        />
        <ThemeIcons color={color} hover={hoverColor} />
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
  );
};

const MobileNavContainer = tw.div`flex flex-wrap font-header w-full justify-between md:hidden`;

const LogoContainer = styled(Link)`
  ${tw`border-b-0 ml-0!`};
`;

const MobileNavLinks = motion.custom(styled.div`
  ${tw`md:hidden z-10 fixed top-0 inset-x-0 mx-2 mx-2 p-8 border text-center rounded-lg text-gray-900 `}
`);

const NavToggle = tw.button`z-10 md:hidden focus:outline-none transition duration-300`;

export default MobileNavbar;
