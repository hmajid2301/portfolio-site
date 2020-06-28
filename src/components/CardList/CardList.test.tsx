import React from 'react';

import CardList from './CardList';

import { render } from 'test-utils';

const items = [
  {
    tags: ['react', 'gatsby'],
    date: '10 May 2020',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
    title: 'Tips on how to travel safely in foreign countries',
    url: 'https://timerse.com',
  },
  {
    date: '10 March 2020',
    tags: ['angular', 'python'],
    image:
      'https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
    title: 'Enjoying the beach life while on a vacation',
    url: 'https://reddit.com',
  },
  {
    date: '10 January 2020',
    tags: ['python', 'javascript'],
    image:
      'https://images.unsplash.com/photo-1592848386144-04df6ee54ff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
    title: 'Enjoying the beach life while on a vacation',
    url: 'https://reddit.com',
  },
];

describe('<CardList />', () => {
  describe('Default CardList', () => {
    test('Render with default styles', () => {
      const { getByTestId } = render(<CardList items={items} />);
      const cardContainer = getByTestId(
        'Card-Tips on how to travel safely in foreign countries'
      );
      expect(cardContainer.className).toContain('text-gray-700');

      items.forEach((item) => {
        const { getAllByText } = render(<CardList items={items} />);
        const title = getAllByText(item.title);
        expect(title).toBeTruthy();
      });
    });
  });

  describe('Props: Color', () => {
    test.each([
      ['purple-500', 'text-purple-500'],
      ['gray-500', 'text-gray-500'],
      ['black', 'text-black'],
    ])('Render with %i color', (color: string, expectedClass: string) => {
      const { getAllByText } = render(<CardList items={items} color={color} />);
      const button = getAllByText('Read More')[0];
      expect(button.className).toContain(expectedClass);
      expect((button as HTMLAnchorElement).href).toBeTruthy();
    });
  });

  describe('Props: Row Size', () => {
    test.each([
      [1, 'lg:w-1/1'],
      [2, 'lg:w-1/2'],
      [4, 'lg:w-1/4'],
    ])('Render with %i row size', (rowSize: number, expectedClass: string) => {
      const { getAllByTestId } = render(
        <CardList items={items} rowSize={rowSize} />
      );
      const column = getAllByTestId(
        'Column-Enjoying the beach life while on a vacation'
      )[0];
      expect(column.className).toContain(expectedClass);
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
          <CardList items={items} textColor={textColor} />
        );
        const card = getAllByTestId(
          'Card-Enjoying the beach life while on a vacation'
        )[0];
        expect(card.className).toContain(expectedClass);
      }
    );
  });
});
