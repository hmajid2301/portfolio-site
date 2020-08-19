import React from 'react';

import ThemeIcons from './ThemeIcons';

import { render, fireEvent } from 'test-utils';
import ThemeProvider from '~/providers/Theme';

describe('<ThemeIcons />', () => {
  test(`check ThemeIcons loads`, () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeIcons onClick={mockFn} />
      </ThemeProvider>
    );

    const icon = getByTestId('ThemeIcon');
    fireEvent.click(icon);
    expect(mockFn).toHaveBeenCalled();
  });
});
