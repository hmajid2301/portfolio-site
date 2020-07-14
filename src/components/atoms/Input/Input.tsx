import React from 'react';
import tw from 'twin.macro';

export interface Props {
  /** The background of the input. */
  background: string;
  /** Extra classes to apply */
  className?: string;
  /** The color of text/icon in the input. */
  color: string;
  /** The aria-label for this component. */
  label: string;
  /** Function to call when the input is out of focused. */
  onBlur?: () => void;
  /** The placeholder text in the input. */
  placeholder?: string;
}

const Input = ({
  background,
  className,
  color,
  label,
  onBlur,
  placeholder = '',
}: Props) => {
  return (
    <TextInput
      aria-label={label}
      className={`bg-${background} text-${color} placeholder-${color} ${className}`}
      data-testid="Input"
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
};

const TextInput = tw.input`inline px-2 h-full font-body w-full text-left inline text-lg transition duration-300`;

export default Input;
