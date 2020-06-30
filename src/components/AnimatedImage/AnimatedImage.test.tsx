import React from 'react';

import AnimatedImage from './AnimatedImage';

import { render } from 'test-utils';

describe('<AnimatedImage />', () => {
  describe('Props: Background', () => {
    test('Render with default style', () => {
      const { getByTestId } = render(
        <AnimatedImage image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&h=400" />
      );
      const image = getByTestId('Image');
      expect(image).toHaveStyleRule(
        'background-image',
        'url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&h=400")'
      );
    });
  });
});
