import React from 'react';

import Input from './Input';

import { render, fireEvent } from 'test-utils';

describe('<Input />', () => {
  test.each([
    ['text-primary text-2xl', 'this is a label for the input', 'search'],
    ['', 'this is another label for the input', 'search input'],
  ])(`check input  loads`, (className, label, placeholder) => {
    const { getByPlaceholderText } = render(
      <Input
        className={className}
        dataId="Input"
        label={label}
        placeholder={placeholder}
      />
    );

    const input = getByPlaceholderText(placeholder);
    expect(input).toHaveAttribute('aria-label', label);
    expect(input.className).toContain(className);
  });

  test('check onChange works', () => {
    const mockFn = jest.fn();

    const { getByTestId } = render(
      <Input dataId="Input" label="a label" onChange={mockFn} />
    );
    const input = getByTestId('Input');
    fireEvent.change(input, { target: { value: 'Good Day' } });
    expect(mockFn).toHaveBeenCalled();
    expect((input as HTMLInputElement).value).toBe('Good Day');
  });
});
