import React from 'react';
import tw from 'twin.macro';

export interface Props {
  /** The background of the icon. */
  background?: string;
  /** Extra classes to assign to this component. */
  className?: string;
  /** The data test id of the icon. */
  dataId?: string;
  /** The icon element. */
  icon: React.ReactNode;
  /** The aria-label for this component. */
  label?: string;
  /** Function to call when the icon is pressed/clicked. */
  onClick?: () => void;
}

const Icon = ({
  background = 'transparent',
  className,
  dataId,
  icon,
  label,
  onClick,
}: Props) => (
  <IconContainer
    aria-label={label}
    className={`bg-${background} ${className}`}
    data-cy={dataId}
    onClick={onClick}
  >
    {icon}
  </IconContainer>
);

const IconContainer = tw.button`h-full w-auto transition duration-300 inline-block text-header hover:text-primary`;

export default Icon;
