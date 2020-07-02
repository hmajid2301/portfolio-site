import styled from '@emotion/styled';
import React from 'react';
import Typist from 'react-typist';
import tw from 'twin.macro';

import { Particles } from '~/components/atoms/Particles';

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

const Hero = ({
  background = 'white',
  color = 'gray-800',
  text,
  showParticles = false,
  particleColor = '#000',
}: Props) => (
  <HeroContainer className={`bg-${background}`} data-testid="HeroContainer">
    <TextContainer
      className={`text-${color}`}
      cursor={{ show: false }}
      data-testid="TextContainer"
    >
      <MainText>{text}</MainText>
    </TextContainer>

    {showParticles && <Particles color={particleColor} />}
  </HeroContainer>
);

const HeroContainer = tw.main`min-h-screen flex flex-col content-center justify-center items-center max-w-screen-xl
mx-auto font-header w-full p-4 m-4 relative`;

const TextContainer = styled(Typist)``;

const MainText = tw.h1`font-header text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-screen-md
leading-none`;

export default Hero;
