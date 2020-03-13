import React, { useContext } from "react";
import styled from "styled-components";

import {
  BackgroundColors,
  DarkModeContext,
  ForegroundColors
} from "~/providers/DarkModeProvider";

const Footer = () => {
  const { background, color } = useContext(DarkModeContext).mode;

  return (
    <FooterContainer background={background} color={color}>
      <div>
        <Link
          color={color}
          href="https://gitlab.com/hmajid2301/hmajid2301.gitlab.io"
        >
          Edit on GitLab
        </Link>
      </div>

      <Separator />
      <div>Made with ❤️ by Haseeb Majid</div>
      <div>Copyright © 2020 Haseeb Majid</div>
      <Separator />

      <div>
        Images from &nbsp;
        <Link color={color} href="https://www.vecteezy.com/vector-art">
          Vecteezy
        </Link>
        &nbsp; and &nbsp;
        <Link color={color} href="https://www.cleanpng.com">
          CleanPNG.
        </Link>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer<{
  background: BackgroundColors;
  color: ForegroundColors;
}>`
  background-color: ${props => props.background};
  color: ${props => props.color};
  flex: 1;
  height: 150px;
  padding: 50px;
  text-align: center;
`;

const Link = styled.a<{ color: ForegroundColors }>`
  color: #3399cc;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.color};
  }
`;

const Separator = styled.hr`
  border: none;
  border-bottom: 2px dashed;
  color: #444;
  max-width: 250px;
`;

export default Footer;
