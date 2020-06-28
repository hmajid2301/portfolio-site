import React from 'react';

import RepositoryCard from './RepositoryCard';

import { render } from 'test-utils';

const item = {
  name: 'stegappasaurus',
  description:
    'An mobile app, created using React Native. Uses steganography to hide messages in images.',
  link: '/project/stegappasaurus',
  stars: 4,
  url: 'https://gitlab.com/hmajid2301/stegappasaurus',
};

describe('<RepositoryCard />', () => {
  describe('Props: Accent Color', () => {
    test.each([
      ['purple-500', 'text-purple-500'],
      ['gray-500', 'text-gray-500'],
      ['black', 'text-black'],
    ])(
      'Render with %i accent color',
      (color: string, expectedClass: string) => {
        const { getByText } = render(
          <RepositoryCard accent={color} item={item} />
        );
        const header = getByText('stegappasaurus');
        expect(header.parentElement?.className).toContain(expectedClass);
        expect((header as HTMLAnchorElement).href).toBe(
          'http://localhost/project/stegappasaurus'
        );
      }
    );
  });

  describe('Props: Background', () => {
    test.each([
      ['purple-500', 'bg-purple-500'],
      ['gray-500', 'bg-gray-500'],
      ['black', 'bg-black'],
    ])(
      'Render with %i background color',
      (color: string, expectedClass: string) => {
        const { getByText } = render(
          <RepositoryCard background={color} item={item} />
        );
        const header = getByText('stegappasaurus');
        expect(header.parentElement?.parentElement?.className).toContain(
          expectedClass
        );
      }
    );
  });

  describe('Props: Color', () => {
    test.each([
      ['purple-500', 'text-purple-500'],
      ['gray-500', 'text-gray-500'],
      ['black', 'text-black'],
    ])('Render with %i color', (color: string, expectedClass: string) => {
      const { getByText } = render(
        <RepositoryCard color={color} item={item} />
      );
      const header = getByText('stegappasaurus');
      expect(header.parentElement?.parentElement?.className).toContain(
        expectedClass
      );
    });
  });

  describe('Props: Hover Color', () => {
    test.each([
      ['purple-500', 'hover:text-purple-500'],
      ['gray-500', 'hover:text-gray-500'],
      ['black', 'hover:text-black'],
    ])('Render with %i color', (color: string, expectedClass: string) => {
      const { getByText } = render(
        <RepositoryCard hover={color} item={item} />
      );
      const header = getByText('stegappasaurus');
      expect(header.parentElement?.className).toContain(expectedClass);

      const metaItem = getByText('Gitlab');
      expect(metaItem.className).toContain(expectedClass);
    });
  });

  describe('Props: Item', () => {
    test('', () => {
      const otherItem = {
        name: 'composerisation',
        description: 'Converts commands between docker run and docker compose.',
        link: '/project/composerisation',
        stars: 1,
        url: 'https://gitlab.com/hmajid2301/composerisation',
      };
      const { getByText } = render(<RepositoryCard item={otherItem} />);

      const checkItems = [
        'composerisation',
        'Converts commands between docker run and docker compose.',
        '1',
      ];

      checkItems.forEach((checkItem) => {
        const foundItem = getByText(checkItem);
        expect(foundItem).toBeTruthy();
      });
    });
  });
});
