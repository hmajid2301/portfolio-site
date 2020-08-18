import React from 'react';

import Logo from './Logo';

import { render } from 'test-utils';

describe('<Logo />', () => {
  test.each([['Haseeb'], ['Name']])(`check Logo loads`, (text) => {
    const { getByText } = render(<Logo text={text} />);
    const logo = getByText(text);
    expect(logo).toBeTruthy();
  });
});
