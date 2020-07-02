import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React from 'react';
import tw from 'twin.macro';

export interface Props {
  /** The number of seconds to transition the animation. */
  transition?: number;
  /** Path to image. */
  image: string;
}

const postBackgroundSizeAnimation = {
  rest: {
    backgroundSize: '100%',
  },
  hover: {
    backgroundSize: '110%',
  },
};

const AnimatedImage = ({ transition = 0.3, image }: Props) => (
  <Image
    data-testid="Image"
    image={image}
    transition={{ duration: transition }}
    variants={postBackgroundSizeAnimation}
  />
);

const Image = styled(motion.div)<{ image: string }>`
  background-image: url("${(props) => props.image}");
  ${tw`bg-cover bg-center h-64 rounded cursor-pointer`}
`;

export default AnimatedImage;
