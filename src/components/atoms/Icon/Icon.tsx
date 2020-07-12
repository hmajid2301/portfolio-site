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
  /** The aria-label for this component. */
  label?: string;
  /** Function to call when the icon is pressed/clicked. */
  onClick?: () => void;
}

const Icon = ({
  background,
  color,
  hoverColor,
  icon,
  label,
  onClick,
}: Props) => (
  <Container
    aria-label={label}
    className={`bg-${background} text-${color} hover:text-${hoverColor}`}
    data-testid="Icon"
    onClick={onClick}
  >
    {icon}
  </Container>
);

const Container = tw.button`px-2 h-full w-auto transition duration-300 inline-block`;

export default Icon;
