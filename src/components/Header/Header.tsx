import {
  Brightness7 as SunIcon,
  NightsStay as MoonIcon,
  Tune as ThemeIcon
} from "@material-ui/icons";
import React, { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components";

import ColorPicker from "~/components/ColorPicker";
import {
  DarkModeContext,
  BackgroundColors,
  ForegroundColors,
  TertiaryColors
} from "~/providers/DarkModeProvider";
import { ThemeContext } from "~/providers/ThemeProvider";

const Header = () => {
  const [picker, setPicker] = useState(false);
  const [previousSelectedColor, setPreviousSelectedColor] = useState("#007cff");
  const theme = useContext(ThemeContext);

  const darkMode = useContext(DarkModeContext);
  const { background, color, isDark, tertiary } = darkMode.mode;

  const [scrollingUp, setScrollingUp] = useState(true);
  const prevScrollY = useRef(0);
  detectScroll(prevScrollY, setScrollingUp, scrollingUp);

  return (
    <Container background={background} scrollUp={scrollingUp}>
      <IconContainer
        color={color}
        onClick={() => {
          setPicker(!picker);
        }}
        tertiary={tertiary}
      >
        <ThemeIcon fontSize="inherit" />
        <ColorPicker
          colors={[
            "#007cff",
            "#f66d4f",
            "#ea423d",
            "#4caf50",
            "#7678ed",
            "#7f055f",
            "#895835",
            "#070707"
          ]}
          onClickColor={(newColor: string) => {
            setTheme(theme, newColor);
            setPreviousSelectedColor(theme.theme);
            setPicker(false);
          }}
          onMouseEnterColor={(newColor: string) => {
            setTheme(theme, newColor);
          }}
          onMouseLeavePicker={() => {
            setTheme(theme, previousSelectedColor);
            setPicker(false);
          }}
          open={picker}
        />
      </IconContainer>

      <IconContainer
        color={color}
        onClick={() => {
          setCurrentMode(darkMode);
        }}
        tertiary={tertiary}
      >
        {isDark ? (
          <SunIcon fontSize="inherit" />
        ) : (
          <MoonIcon fontSize="inherit" />
        )}
      </IconContainer>
    </Container>
  );
};

const setCurrentMode = (darkMode: DarkModeContext) => {
  const isDark = darkMode.mode.isDark;
  darkMode.dispatch(!isDark);
};

const setTheme = (theme: ThemeContext, color: string) => {
  theme.dispatch(color);
};

function detectScroll(
  prevScrollY: React.MutableRefObject<number>,
  setScrollingUp: React.Dispatch<React.SetStateAction<boolean>>,
  scrollingUp: boolean
) {
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY) {
        setScrollingUp(false);
      } else if (prevScrollY.current > currentScrollY) {
        setScrollingUp(true);
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollingUp]);
}

const Container = styled.div<{
  background: BackgroundColors;
  scrollUp: boolean;
}>`
  background-color: ${props => props.background};
  display: flex;
  position: fixed;
  right: 0;
  top: ${props => (props.scrollUp ? "0" : "-10em")};
  transition: all 0.3s ease;
  z-index: 99;

  &:hover {
    top: 0em;
  }
`;

const IconContainer = styled.div<{
  tertiary: TertiaryColors;
  color: ForegroundColors;
}>`
  box-shadow: ${props => props.tertiary} 0px 2px 6px -3px;
  color: #b2becd;
  cursor: pointer;
  font-size: 3.5em;
  padding: 10px;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.color};
  }

  @media (max-width: 500px) {
    font-size: 2.5em;
    padding: 10px;
  }
`;

export default Header;
