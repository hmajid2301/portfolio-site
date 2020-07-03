import React from 'react';

import PostMeta from './PostMeta';

import { render } from 'test-utils';

describe('<PostMeta />', () => {
  describe('Props: Social Buttons', () => {
    test('Render with %i title', () => {
      const props = {
        date: '20 January 2020',
        tags: ['angular', 'python', 'gatsby'],
        title: 'This is a blog post',
        url: 'http://localhost',
      };

      const { getByText } = render(<PostMeta {...props} />);

      const title = getByText('This is a blog post');
      expect(title.parentElement?.className).toContain('text-gray-800');
    });
  });
});
