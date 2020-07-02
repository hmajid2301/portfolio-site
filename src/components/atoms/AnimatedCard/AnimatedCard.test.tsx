import React from 'react';

import AnimatedCard from './AnimatedCard';

import { render } from 'test-utils';

import { AnimatedImage } from '~/components/atoms/AnimatedImage';

describe('<AnimatedCard />', () => {
  describe('Props: Background', () => {
    test('Render with default style', () => {
      const { getByTestId } = render(
        <AnimatedCard className="space-x-0">
          <AnimatedImage image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&h=400" />
        </AnimatedCard>
      );
      const container = getByTestId('Container');
      expect(container.className).toContain('space-x-0');
    });
  });
});
