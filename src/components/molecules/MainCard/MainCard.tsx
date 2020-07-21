import styled from '@emotion/styled';
import { Link as Card } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { AnimatedCard } from '~/components/atoms/AnimatedCard';
import { AnimatedImage } from '~/components/atoms/AnimatedImage';

export interface Props {
  /** The background color of the overlay. */
  background?: string;
  /** The color of main text. */
  color?: string;
  /** The background color of the overlay text. */
  textBackground?: string;
  /** The item to show in the card. */
  item: MainCardItem;
}

export interface MainCardItem {
  /** A short description of the project. */
  description: string;
  /** The project name. */
  name: string;
  /** An image to display for the project. */
  image: string;
  /** A link to project. */
  url: string;
}

const MainCard = ({
  background = 'black',
  color = 'white',
  textBackground = 'blue-500',
  item,
}: Props) => (
  <Container className={`group text-${color}`} data-testid="Container">
    <Card to={item.url}>
      <AnimatedImage image={item.image} />
      <OverlayContainer className={`bg-${background}`}>
        <HeaderText className={`bg-${textBackground}`}>{item.name}</HeaderText>
        <MainText className={`bg-${textBackground}`}>
          {item.description}
        </MainText>
      </OverlayContainer>
    </Card>
  </Container>
);

const Container = styled(AnimatedCard)`
  ${tw`relative items-start rounded max-w-lg font-body`}
`;

const OverlayContainer = tw.div`absolute inset-0 opacity-0 group-hover:opacity-100 ease-out duration-200 bg-opacity-50`;

const HeaderText = tw.h1`text-base md:text-lg font-normal relative top-1/8 left-0 py-2 px-8 inline w-auto font-body`;

const MainText = tw.p`text-base relative top-3/4 left-0 px-8 py-2`;

export default MainCard;
