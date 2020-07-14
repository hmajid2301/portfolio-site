import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import {
  RiCloseLine as CloseIcon,
  RiMenuLine as MenuIcon,
} from 'react-icons/ri';
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
  color = 'gray-800',
  hoverColor = 'blue-500',
  links,
}: Props) => {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();

  return (
    <MobileNavContainer>
      <LogoContainer to="/">
        <Logo
          accent="gray-500"
          color={color}
          hoverColor={hoverColor}
          text="Haseeb"
        />
      </LogoContainer>
      <MobileNavLinks
        animate={animation}
        className={`text-${color} bg-${background}`}
        initial={{ x: '150%', display: 'none' }}
      >
        <Links
          color={color}
          hoverColor={hoverColor}
          linkClassName="text-lg my-2 font-bold transition border-transparent"
          links={links}
        />
      </MobileNavLinks>
      <IconContainer>
        <SearchBar
          background="gray-200"
          color={color}
          hoverColor={hoverColor}
        />
        <NavToggle
          aria-label="Toggles navigation bar."
          className={`hover:text-${hoverColor} ${
            showNavLinks ? 'open' : 'closed'
          }`}
          onClick={toggleNavbar}
          type="button"
        >
          {showNavLinks ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </NavToggle>

        <ThemeIcons color={color} hover={hoverColor} />
      </IconContainer>
    </MobileNavContainer>
  );
};

const MobileNavContainer = tw.div`flex justify-between items-center lg:hidden`;

const LogoContainer = styled(Link)`
  ${tw`border-b-0 ml-0!`};
`;

const MobileNavLinks = motion.custom(styled.div`
  ${tw`lg:hidden fixed mt-2 top-0 inset-x-0 mx-2 p-8 border text-center rounded-lg`}
`);

const NavToggle = tw.button`z-10 lg:hidden focus:outline-none transition duration-300`;

const IconContainer = tw.div`flex flex-row space-x-3 items-center`;

export default MobileNavbar;
