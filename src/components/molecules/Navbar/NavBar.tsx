import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React from 'react';
import {
  RiCloseLine as CloseIcon,
  RiMenuLine as MenuIcon,
} from 'react-icons/ri';
import tw from 'twin.macro';

import { Links } from '~/components/molecules/Links';
import useAnimatedNavToggler from '~/helpers/useAnimatedNavToggler';

export interface Props {
  /** The links to show in the navigation bar */
  links: {
    /** The name of the link to show. */
    name: string;
    /** Where to link to on the website. */
    link: string;
  }[];
}

const NavBar = ({ links }: Props) => {
  const { showNavLinks, toggleNavbar, animation } = useAnimatedNavToggler();
  return (
    <>
      <DesktopNavLinks>
        <Links
          className="mx-24"
          linkClassName=" text-base lg:text-base xl:text-lg font-semibold"
          links={links}
        />
      </DesktopNavLinks>
      <MobileNavLinks
        animate={animation}
        initial={{ x: '150%', display: 'none' }}
      >
        <Links
          linkClassName="text-lg my-2 font-bold transition border-transparent"
          links={links}
        />
      </MobileNavLinks>
      <NavToggle
        aria-label="Toggles navigation bar."
        onClick={toggleNavbar}
        type="button"
      >
        {showNavLinks ? (
          <CloseIcon className="w-6 h-6" />
        ) : (
          <MenuIcon className="w-6 h-6" />
        )}
      </NavToggle>
    </>
  );
};

const NavToggle = tw.button`z-10 lg:hidden focus:outline-none transition duration-300 hover:text-primary`;

const MobileNavLinks = motion.custom(styled.div`
  ${tw`lg:hidden flex fixed mt-2 top-0 inset-x-0 mx-2 p-8 border text-center rounded-lg bg-background`}
`);

const DesktopNavLinks = tw.div`hidden lg:flex`;

export default NavBar;
