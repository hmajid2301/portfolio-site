import React from 'react';
import tw from 'twin.macro';

export interface Props {
  /** The background of the input. */
  background: string;
  /** The color of text/icon in the input. */
  color: string;
  /** The aria-label for this component. */
  label: string;
  /** The placeholder text in the input. */
  placeholder?: string;
}

const Input = ({ background, color, label, placeholder = '' }: Props) => {
  return (
    <TextInput
      aria-label={label}
      className={`bg-${background} text-${color} placeholder-${color}`}
      data-testid="Input"
      placeholder={placeholder}
    />
  );
};

const TextInput = tw.input`inline px-2 h-full font-body w-full text-left inline text-lg transition duration-300`;

export default Input;