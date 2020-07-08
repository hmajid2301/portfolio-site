import styled from '@emotion/styled';
import React, { useState } from 'react';
// eslint-disable-next-line
// @ts-ignore
import { MorphReplace } from 'react-svg-morph';
import tw from 'twin.macro';

import { DarkIcon, LightIcon } from '~/components/atoms/Icon';

export interface Props {
  /** The color of icon. */
  color: string;
  /** The color of the icon on hover. */
  hover: string;
  /** Function to call when an icon is pressed. */
  onClick?: () => void;
}

const ThemeIcons = ({ color, hover, onClick }: Props) => {
  const [isLight, setTheme] = useState(true);

  function themeChange() {
    setTheme(!isLight);
    if (onClick) {
      onClick();
    }
  }

  return (
    <Container
      className={`text-${color} hover:text-${hover}`}
      data-testid="Icon"
      onClick={() => themeChange()}
    >
      <IconMorph>
        {isLight ? <LightIcon key="light" /> : <DarkIcon key="dark" />}
      </IconMorph>
    </Container>
  );
};

const Container = tw.span`transition duration-300 cursor-pointer`;

const IconMorph = styled(MorphReplace)`
  ${tw`fill-current h-8 w-auto`}
`;

export default ThemeIcons;
