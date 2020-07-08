import React from 'react';
import { FaSearch as Search } from 'react-icons/fa';

import Icon from './Icon';

import { render } from 'test-utils';

describe('<Icon />', () => {
  test('Render with default style', () => {
    const { getByTestId } = render(
      <Icon color="white" hoverColor="blue-500" icon={<Search />} />
    );
    const container = getByTestId('Icon');
    expect(container.className).toContain('text-white hover:text-blue-500');
  });
});
