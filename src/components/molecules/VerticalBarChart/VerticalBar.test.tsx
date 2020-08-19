import React from 'react';

import VerticalBarChart from './VerticalBarChart';

import { render, within } from 'test-utils';

describe('<VerticalBarChart />', () => {
  test.each([
    [
      'My chart!',
      [
        {
          name: 'Monday',
          percent: 10,
          count: 10,
        },
        {
          name: 'Tuesday',
          percent: 10,
          count: 10,
        },
        {
          name: 'Wednesday',
          percent: 10,
          count: 10,
        },
        {
          name: 'Thursday',
          percent: 10,
          count: 10,
        },
        {
          name: 'Friday',
          percent: 60,
          count: 60,
        },
      ],
      [
        'Another chart!',
        [
          {
            name: 'words',
            percent: 100,
            count: 100,
          },
        ],
      ],
    ],
  ])(`check VerticalBarChart loads`, (title, data) => {
    const { getByText } = render(
      <VerticalBarChart data={data} title={title} />
    );
    const titleText = getByText(title);
    expect(titleText).toBeTruthy();
    data.forEach((item) => {
      const name = getByText(item.name);
      const barItem = within(name.parentElement as HTMLElement);
      const count = barItem.getByText(`x${item.count}`);

      expect(count).toBeTruthy();
      expect(name).toBeTruthy();
    });
  });
});
