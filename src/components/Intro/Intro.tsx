import styled from '@emotion/styled';
import React from 'react';
import Particles from 'react-particles-js';
import Typist from 'react-typist';
import tw from 'twin.macro';

export interface Props {
  /** The color of the background. */
  background?: string;
  /** The color of the text. */
  color?: string;
  /** The text shown on the hero panel for example, your name. */
  text: string;
  /** If set to True will show particles in the background. */
  showParticles?: boolean;
  /** The color of the particle elements. */
  particleColor?: string;
}

const Intro = ({
  background = 'white',
  color = 'gray-800',
  text,
  showParticles = false,
  particleColor = '#000',
}: Props) => (
  <IntroContainer className={`bg-${background}`} data-testid="IntroContainer">
    <TextContainer
      cursor={{ show: false }}
      className={`text-${color}`}
      data-testid="TextContainer"
    >
      <MainText>{text}</MainText>
    </TextContainer>

    {showParticles && (
      <ParticleContainer
        data-testid="ParticleContainer"
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            color: {
              value: particleColor,
            },
            size: {
              value: 5,
              random: true,
              anim: {
                speed: 3,
                size_min: 0.7,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
              onclick: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
    )}
  </IntroContainer>
);

const IntroContainer = tw.main`min-h-screen flex flex-col content-center justify-center items-center max-w-screen-xl
mx-auto font-header w-full p-4 m-4 relative`;

const TextContainer = styled(Typist)``;

const ParticleContainer = styled(Particles)`
  ${tw`h-full w-full absolute inset-0 pointer-events-none`}
`;

const MainText = tw.h1`font-header text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-screen-md
leading-none`;

export default Intro;
