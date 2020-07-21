import React from 'react';
import tw from 'twin.macro';

import { DesktopNavbar } from '~/components/molecules/DesktopNavbar';
import { MobileNavbar } from '~/components/molecules/MobileNavbar';

export interface Props {
  /** The background color of the header. */
  background?: string;
  /** The color of the links text. */
  color?: string;
  /** The color when you hover over the nav bar links. */
  hoverColor?: string;
}

const Header = ({
  background = 'white',
  color = 'black',
  hoverColor = 'blue-500',
}: Props) => {
  const links = ['Home', 'Blog', 'Projects', 'Open Source', 'Uses'];

  return (
    <HeaderContainer
      className={`text-${color} bg-${background}`}
      data-testid="Header"
    >
      <DesktopNavbar
        background={background}
        color={color}
        hoverColor={hoverColor}
        links={links}
      />
      <MobileNavbar
        background={background}
        color={color}
        hoverColor={hoverColor}
        links={links}
      />
    </HeaderContainer>
  );
};

const HeaderContainer = tw.header`font-header`;

export default Header;
