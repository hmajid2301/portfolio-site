import React from 'react';

import DonutChart from './DonutChart';

import { render } from 'test-utils';

describe('<DonutChart />', () => {
  test.each([
    [100, 1000, 'A chart title', 'word'],
    [2760, 40000, 'Another chart title', 'word'],
  ])(`check DonutChart loads`, (length, total, title, unit) => {
    const { getByText } = render(
      <DonutChart length={length} title={title} total={total} unit={unit} />
    );

    const average = Math.floor(total / length);
    const averageText = getByText(average.toString());
    const totalText = getByText(`Total ${unit}: ${total.toLocaleString()}`);

    expect(averageText).toBeTruthy();
    expect(totalText).toBeTruthy();
  });
});
