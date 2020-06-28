import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

export interface Props {
  /** The background color of the overlay. */
  background?: string;
  /** The color of main text. */
  color?: string;
  /** The background color of the overlay text. */
  textBackground?: string;
  /** The item to show in the card. */
  item: Item;
}

export type Item = {
  name: string;
  description: string;
  image: string;
  link: string;
};

const postBackgroundSizeAnimation = {
  rest: {
    backgroundSize: '100%',
  },
  hover: {
    backgroundSize: '110%',
  },
};

const MainCard = ({
  background = 'black',
  color = 'white',
  textBackground = 'blue-500',
  item,
}: Props) => (
  <Container
    className={`group text-${color}`}
    initial="rest"
    whileHover="hover"
    animate="rest"
    data-testid="Container"
  >
    <Link to={item.link}>
      <Image
        image={item.image}
        transition={{ duration: 0.3 }}
        variants={postBackgroundSizeAnimation}
      />

      <OverlayContainer className={`bg-${background}`}>
        <HeaderText className={`bg-${textBackground}`}>{item.name}</HeaderText>
        <MainText className={`bg-${textBackground}`}>
          {item.description}
        </MainText>
      </OverlayContainer>
    </Link>
  </Container>
);

const Container = styled(motion.div)`
  ${tw`relative items-start rounded max-w-lg font-body`}
`;

const Image = styled(motion.div)<{ image: string }>`
  background-image: url("${(props) => props.image}");
  ${tw`bg-cover bg-center h-64 rounded cursor-pointer`}
`;

const OverlayContainer = tw.div`absolute inset-0 opacity-0 group-hover:opacity-100 ease-out duration-200 bg-opacity-50`;

const HeaderText = tw.h1`text-base md:text-lg font-normal relative top-1/8 left-0 py-2 px-8 inline w-auto font-body`;

const MainText = tw.p`text-base relative top-3/4 left-0 px-8 py-2`;

export default MainCard;
