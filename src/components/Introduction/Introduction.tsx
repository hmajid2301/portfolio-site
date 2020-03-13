import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import Typist from "react-typist";
import Particles from "react-particles-js";
import styled from "styled-components";

import { ThemeContext } from "~/providers/ThemeProvider";

const Introduction = () => {
  const primary = useContext(ThemeContext).theme;

  return (
    <IntroductionContainer background={primary}>
      <Typist cursor={{ show: false }}>
        <MainText variant="h2">Hello, I am Haseeb Majid</MainText>
      </Typist>

      <Typist cursor={{ show: false }} startDelay={2000}>
        <SubText variant="h4">
          Software Developer 🖥️ ️| Python 🐍 | TypeScript 📜
        </SubText>
      </Typist>

      <ParticleContainer
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false
              }
            },
            size: {
              value: 5,
              random: true,
              anim: {
                speed: 3,
                size_min: 0.7
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              random: true,
              speed: 2,
              direction: "top",
              out_mode: "out"
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "repulse"
              }
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0
              },
              repulse: {
                distance: 400,
                duration: 4
              }
            }
          }
        }}
      />
    </IntroductionContainer>
  );
};

const IntroductionContainer = styled.div<{ background: string }>`
  background: ${props => props.background};
  color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 30;
  text-align: center;
`;

const MainText = styled(Typography)`
  font-weight: 700;
  margin-bottom: 20px;
`;

const SubText = styled(Typography)`
  font-weight: 300;
`;

const ParticleContainer = styled(Particles)`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  pointer-events: none;
  width: 100%;
  height: 100%;
`;

export default Introduction;
