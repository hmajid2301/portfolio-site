import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { MorphReplace } from 'react-svg-morph';
import tw from 'twin.macro';

import { DarkIcon, LightIcon } from '~/components/atoms/Icon';
import { ThemeContext } from '~/providers/Theme';

export interface Props {
  /** Function to call when an icon is pressed. */
  onClick?: () => void;
}

const ThemeIcons = ({ onClick }: Props) => {
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
    <ThemeIconContainer
      data-cy="ThemeIcon"
      data-testid="ThemeIcon"
      onClick={() => themeChange()}
    >
      <IconMorph>
        {theme === 'light' ? (
          <LightIcon key="light" />
        ) : (
          <DarkIcon key="dark" />
        )}
      </IconMorph>
    </ThemeIconContainer>
  );
};

const ThemeIconContainer = tw.span`transition duration-300 cursor-pointer hover:text-primary`;

const IconMorph = styled(MorphReplace)`
  ${tw`fill-current h-6 w-auto`}
`;

export default ThemeIcons;
