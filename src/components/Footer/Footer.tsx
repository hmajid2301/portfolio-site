import { Button, Grid } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import React, { useContext } from "react";
import styled from "styled-components";

import { GridItem } from "~/components/Common";
import { ThemeContext } from "~/providers/ThemeProvider";

const Footer = () => {
  const theme = useContext(ThemeContext).theme;

  return (
    <FooterContainer background={theme}>
      <Grid container spacing={5}>
        <GridItem item sm={9} style={{ textAlign: "left" }}>
          <div>Copyright © 2020 Haseeb Majid</div>

          <div>
            Images from &nbsp;
            <Link href="https://www.vecteezy.com/vector-art">Vecteezy</Link>
            &nbsp; and &nbsp;
            <Link href="https://www.cleanpng.com">CleanPNG.</Link>
          </div>
        </GridItem>

        <GridItem item sm={3}>
          <Button href="https://github.com/hmajid2301" target="_blank">
            <IconContainer>
              <GitHub fontSize="inherit" />
            </IconContainer>
          </Button>
          <Button
            href="https://www.linkedin.com/in/haseeb-majid-ba0a5194/"
            target="_blank"
          >
            <IconContainer>
              <LinkedIn fontSize="inherit" />
            </IconContainer>
          </Button>
        </GridItem>
      </Grid>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer<{
  background: string;
}>`
  background-color: ${props => props.background};
  color: white;
  flex: 1;
  font-size: 16px;
  height: 100px;
  padding: 50px 20px 20px 20px;
  text-align: center;
`;

const Link = styled.a`
  color: white;
  font-weight: 400;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.color};
    text-decoration: underline;
  }
`;

const IconContainer = styled.div`
  border-radius: 100%;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 3em;
  transition: transform 0.4s ease-in-out;
`;

export default Footer;
