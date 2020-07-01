import React from 'react';

import MainCard from './MainCard';

import { render } from 'test-utils';

const item = {
  name: 'stegappasaurus',
  description:
    'An mobile app, created using React Native. Uses steganography to hide messages in images.',
  image:
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&h=400',
  link: '/project/stegappasaurus',
};

describe('<MainCard />', () => {
  describe('Props: Background', () => {
    test.each([
      ['purple-500', 'bg-purple-500'],
      ['gray-500', 'bg-gray-500'],
      ['black', 'bg-black'],
    ])(
      'Render with %i background color',
      (color: string, expectedClass: string) => {
        const { getByText } = render(
          <MainCard background={color} item={item} />
        );
        const header = getByText('stegappasaurus');
        expect(header.parentElement?.className).toContain(expectedClass);
      }
    );
  });

  describe('Props: Color', () => {
    test.each([
      ['purple-500', 'text-purple-500'],
      ['gray-500', 'text-gray-500'],
      ['black', 'text-black'],
    ])('Render with %i color', (color: string, expectedClass: string) => {
      const { getByText } = render(<MainCard color={color} item={item} />);
      const header = getByText('stegappasaurus');
      expect(
        header.parentElement?.parentElement?.parentElement?.className
      ).toContain(expectedClass);
    });
  });

  describe('Props: Text Background', () => {
    test.each([
      ['purple-500', 'bg-purple-500'],
      ['gray-500', 'bg-gray-500'],
      ['black', 'bg-black'],
    ])('Render with %i color', (color: string, expectedClass: string) => {
      const { getByText } = render(
        <MainCard item={item} textBackground={color} />
      );
      const header = getByText('stegappasaurus');
      expect(header.className).toContain(expectedClass);
    });
  });

  describe('Props: Item', () => {
    test('', () => {
      const otherItem = {
        name: 'composerisation',
        description: 'Converts commands between docker run and docker compose.',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&h=400',
        link: '/project/composerisation',
      };
      const { getByText } = render(<MainCard item={otherItem} />);

      const checkItems = [
        'composerisation',
        'Converts commands between docker run and docker compose.',
      ];

      checkItems.forEach((checkItem) => {
        const foundItem = getByText(checkItem);
        expect(foundItem).toBeTruthy();
      });
    });
  });
});
