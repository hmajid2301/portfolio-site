import styled from '@emotion/styled';
import React, { useContext } from 'react';
import Typist from 'react-typist';
import tw from 'twin.macro';

import { Particles } from '~/components/atoms/Particles';
import { ThemeContext } from '~/providers/Theme';

export interface Props {
  /** The name to show in the hero panel. */
  name: string;
}

const Hero = ({ name }: Props) => {
  const { theme } = useContext(ThemeContext);
  const color = theme === 'light' ? '#000' : '#fff';

  return (
    <HeroContainer>
      <TextContainer cursor={{ show: false }}>
        <MainText>
          <span>
            Hello, I&apos;m <span className="text-primary">{name}</span> 🧑‍💻,
            a software engineer 🖥️. Welcome to my{' '}
            <span className="text-primary">website</span> and{' '}
            <span className="text-primary">blog</span> 📒.{' '}
          </span>
        </MainText>
      </TextContainer>

      {theme === 'light' && <Particles color={color} />}
      {theme === 'dark' && <Particles color={color} />}
    </HeroContainer>
  );
};

const HeroContainer = tw.div`min-h-3/4-screen flex flex-col content-center justify-center items-center max-w-full
mx-auto font-header p-4 m-4 relative text-header bg-background font-black`;

const TextContainer = styled(Typist)`
  ${tw`max-w-screen-lg text-3xl md:text-4xl lg:text-5xl xl:text-6xl
leading-none`}
`;

const MainText = tw.h1``;

export default Hero;
