import styled from '@emotion/styled';
import React, { useContext } from 'react';
import Typist from 'react-typist';
import tw from 'twin.macro';

import { Particles } from '~/components/atoms/Particles';
import { ThemeContext } from '~/providers/Theme';

export interface Props {
  /** The text shown on the hero panel for example, your name. */
  text: string | JSX.Element;
  /** If set to True will show particles in the background. */
  showParticles?: boolean;
}

const Hero = ({ text, showParticles = false }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <HeroContainer>
      <TextContainer cursor={{ show: false }}>
        <MainText>{text}</MainText>
      </TextContainer>

      {showParticles && (
        <Particles color={theme === 'light' ? '#000' : '#fff'} />
      )}
    </HeroContainer>
  );
};

const HeroContainer = tw.main`min-h-3/4-screen flex flex-col content-center justify-center items-center max-w-full
mx-auto font-header p-4 m-4 relative text-header bg-background font-black`;

const TextContainer = styled(Typist)`
  ${tw`max-w-screen-lg`}
`;

const MainText = tw.h1`text-3xl md:text-4xl lg:text-5xl xl:text-6xl
leading-none`;

export default Hero;
