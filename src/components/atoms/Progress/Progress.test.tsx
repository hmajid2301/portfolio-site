import React from 'react';

import Progress from './Progress';

import { render } from 'test-utils';

describe('<Progress />', () => {
  test.each([
    ['', 100],
    ['text-blue-500', 80],
  ])(`check Progress loads`, (className, width) => {
    const { getByTestId } = render(
      <Progress className={className} width={width} />
    );
    const progress = getByTestId('Progress');
    expect(progress.className).toContain(className);
    expect(progress).toHaveStyle(`width: ${width}%`);
  });
});
