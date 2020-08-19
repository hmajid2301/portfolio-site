import React from 'react';

import Particles from './Particles';

import { render } from 'test-utils';

describe('<Particles />', () => {
  test(`check Particles loads`, () => {
    const { container } = render(<Particles color="#368ee9" />);
    const particle = container.querySelector('#tsparticles');
    expect(particle).toBeTruthy();
  });
});
