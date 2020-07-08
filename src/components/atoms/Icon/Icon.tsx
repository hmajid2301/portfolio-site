import React from 'react';
import tw from 'twin.macro';

export interface Props {
  /** The background of the icon. */
  background?: string;
  /** The color of the icon. */
  color: string;
  /** The color of icon on hover. */
  hoverColor?: string;
  /** The icon element. */
  icon: React.ReactNode;
}

const Icon = ({ background, color, hoverColor, icon }: Props) => (
  <Container
    className={`bg-${background} text-${color} hover:text-${hoverColor}`}
    data-testid="Icon"
    type="button"
  >
    {icon}
  </Container>
);

const Container = tw.button`px-2 h-full w-auto transition duration-300 inline-block`;

export default Icon;
