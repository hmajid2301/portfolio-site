import React from 'react';
import tw from 'twin.macro';

export interface Props {
  /** Extra classes to assign to this component. */
  className?: string;
  /** The icon element. */
  icon: React.ReactNode;
  /** The aria-label for this component. */
  label?: string;
  /** Function to call when the icon is pressed/clicked. */
  onClick?: () => void;
}

const Icon = ({ className, icon, label, onClick }: Props) => (
  <Container
    aria-label={label}
    className={`bg-background text-header hover:text-primary ${className}`}
    onClick={onClick}
  >
    {icon}
  </Container>
);

const Container = tw.button`h-full w-auto transition duration-300 inline-block`;

export default Icon;
