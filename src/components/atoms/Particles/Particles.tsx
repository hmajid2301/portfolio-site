import styled from '@emotion/styled';
import React from 'react';
import ParticlesEffect from 'react-particles-js';
import tw from 'twin.macro';

export interface Props {
  /** The color of the particles. */
  color: string;
}

const Particles = ({ color }: Props) => {
  return (
    <ParticleContainer
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: false,
            },
          },
          color: {
            value: color,
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
  );
};

const ParticleContainer = styled(ParticlesEffect)`
  ${tw`h-full w-full absolute inset-0 pointer-events-none`}
`;

export default Particles;
