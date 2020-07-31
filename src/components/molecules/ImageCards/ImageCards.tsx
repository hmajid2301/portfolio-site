import React from 'react';
import tw from 'twin.macro';

import { ImageCard, Props as ImageItem } from '~/components/atoms/ImageCard';

export interface Props {
  /** The items to show in the image card list. */
  items: ImageItem[];
}

const ImageCards = ({ items }: Props) => (
  <ImageListContainer>
    {items.map((item) => (
      <ImageCardContainer>
        <ImageCard
          alt={item.alt}
          image={item.image}
          link={item.link}
          text={item.text}
        />
      </ImageCardContainer>
    ))}
  </ImageListContainer>
);

const ImageListContainer = tw.div`flex flex-row justify-center relative`;

const ImageCardContainer = tw.div`mx-4 flex`;

export default ImageCards;
