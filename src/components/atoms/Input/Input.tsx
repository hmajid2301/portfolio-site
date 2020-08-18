import React from 'react';
import tw from 'twin.macro';

export interface Props {
  /** Extra classes to apply */
  className?: string;
  /** The data test id of the icon. */
  dataId?: string;
  /** The aria-label for this component. */
  label: string;
  /** Function to call when the input is changed. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** The placeholder text in the input. */
  placeholder?: string;
  /** The text shown in the input */
  value?: string;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, dataId, label, onChange, placeholder = '', value }, ref) => (
    <TextInput
      ref={ref}
      aria-label={label}
      className={`bg-background text-header placeholder-main ${className}`}
      data-cy={dataId}
      data-testid={dataId}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  )
);

const TextInput = tw.input`inline px-2 h-full font-body w-full text-left inline text-lg transition duration-300`;

export default Input;
