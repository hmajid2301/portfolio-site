import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { MorphReplace } from 'react-svg-morph';
import tw from 'twin.macro';

import { DarkIcon, LightIcon } from '~/components/atoms/Icon';
import { ThemeContext } from '~/providers/Theme';

export interface Props {
  /** The color of icon. */
  color: string;
  /** The color of the icon on hover. */
  hover: string;
  /** Function to call when an icon is pressed. */
  onClick?: () => void;
}

const ThemeIcons = ({ color, hover, onClick }: Props) => {
  const { theme, setTheme } = useContext(ThemeContext);

  function themeChange() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
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
        {theme === 'light' ? (
          <LightIcon key="light" />
        ) : (
          <DarkIcon key="dark" />
        )}
      </IconMorph>
    </Container>
  );
};

const Container = tw.span`transition duration-300 cursor-pointer`;

const IconMorph = styled(MorphReplace)`
  ${tw`fill-current h-6 w-auto`}
`;

export default ThemeIcons;
