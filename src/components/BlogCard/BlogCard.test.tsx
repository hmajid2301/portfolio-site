import React from 'react';

import BlogCard from './BlogCard';

import { render } from 'test-utils';

const item = {
  tags: ['react', 'gatsby'],
  date: '10 May 2020',
  image:
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
  title: 'Tips on how to travel safely in foreign countries',
  url: 'https://timerse.com',
};

describe('<BlogItem />', () => {
  describe('Default BlogItem', () => {
    test('Render with default styles', () => {
      const { getByTestId } = render(<BlogCard item={item} />);
      const cardContainer = getByTestId(
        'Card-Tips on how to travel safely in foreign countries'
      );
      expect(cardContainer.className).toContain('text-gray-700');

      const { getAllByText } = render(<BlogCard item={item} />);
      const title = getAllByText(item.title);
      expect(title).toBeTruthy();
    });
  });

  describe('Props: Color', () => {
    test.each([
      ['purple-500', 'text-purple-500'],
      ['gray-500', 'text-gray-500'],
      ['black', 'text-black'],
    ])('Render with %i color', (color: string, expectedClass: string) => {
      const { getByTestId } = render(<BlogCard color={color} item={item} />);
      const cardContainer = getByTestId(
        'Card-Tips on how to travel safely in foreign countries'
      );
      expect(cardContainer.className).toContain(expectedClass);
    });
  });

  describe('Props: Text Color', () => {
    test.each([
      ['gray-500', 'text-gray-500'],
      ['blue-500', 'text-blue-500'],
    ])(
      'Render with %i text color',
      (textColor: string, expectedClass: string) => {
        const { getAllByTestId } = render(
          <BlogCard item={item} textColor={textColor} />
        );
        const card = getAllByTestId(
          'Card-Tips on how to travel safely in foreign countries'
        )[0];
        expect(card.className).toContain(expectedClass);
      }
    );
  });
});
