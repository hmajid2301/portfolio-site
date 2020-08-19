import React from 'react';

import tw from 'twin.macro';

export interface Props {
  /** Image alt. */
  alt?: string;
  /** Path to image. */
  image: string;
  /** Link when image is pressed. */
  link: string;
  /** The overlay text. */
  text: string;
}

const ImageCard = ({ alt, image, link, text }: Props) => (
  <ImageCardLink
    className="group"
    data-testid="ImageCard"
    href={link}
    rel="noreferrer"
    target="_blank"
  >
    <img alt={alt} data-testid="ImageCardImage" loading="lazy" src={image} />
    <OverlayContainer>
      <OverlayText>{text}</OverlayText>
    </OverlayContainer>
  </ImageCardLink>
);

const ImageCardLink = tw.a`overflow-hidden cursor-pointer transform
hover:-translate-y-2 transition duration-300 mx-4`;

const OverlayContainer = tw.div`absolute inset-0 opacity-0 group-hover:opacity-100 ease-out duration-200 bg-black bg-opacity-50`;

const OverlayText = tw.h1`text-lg lg:text-2xl relative top-1/8 left-0 py-2 px-8 inline w-auto font-header bg-primary text-white`;

export default ImageCard;
