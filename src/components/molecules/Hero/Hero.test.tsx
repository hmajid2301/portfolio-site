import React from 'react';

import Hero from './Hero';

import { render } from 'test-utils';
import ThemeProvider from '~/providers/Theme';

describe('<Hero />', () => {
  test.each([['Haseeb'], ['Tom'], ['Kent']])(`check Hero loads`, (name) => {
    const { container } = render(
      <ThemeProvider>
        <Hero name={name} />
      </ThemeProvider>
    );
    const particle = container.querySelector('#tsparticles');
    const hero = container.querySelector('.Typist');
    expect(particle).toBeTruthy();
    expect(hero).toBeTruthy();
  });
});
