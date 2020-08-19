import React from 'react';

import HorizontalBar from './HorizontalBarChart';

import { render, within } from 'test-utils';

describe('<HorizontalBar />', () => {
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
  ])(`check HorizontalBar loads`, (title, data) => {
    const { getByText } = render(<HorizontalBar data={data} title={title} />);
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
