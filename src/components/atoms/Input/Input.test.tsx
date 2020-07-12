import React from 'react';

import Input from './Input';

import { render } from 'test-utils';

describe('<Input />', () => {
  test('Render with default style', () => {
    const { getByTestId } = render(
      <Input background="black" color="white" label="Search" />
    );
    const container = getByTestId('Input');
    expect(container.className).toContain('bg-black text-white');
  });
});
