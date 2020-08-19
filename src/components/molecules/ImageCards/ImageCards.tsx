import React from 'react';
import tw from 'twin.macro';

import { ImageCard, ImageData } from '~/components/atoms/ImageCard';

export interface Props {
  /** The cypress dataId */
  dataId?: string;
  /** The items to show in the image card list. */
  items: ImageData[];
}

const ImageCards = ({ dataId, items }: Props) => (
  <ImageListContainer>
    {items.map((item) => (
      <ImageCardContainer key={item.text} data-cy={dataId} data-testid={dataId}>
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

const ImageListContainer = tw.div`grid grid-cols-1 lg:grid-cols-2 relative`;

const ImageCardContainer = tw.div`m-4 flex items-center justify-center`;

export default ImageCards;
