import React from 'react';
import { render } from 'test-utils';

import Logo from '../Logo';

describe('<Logo />', () => {
  describe('default logo', () => {
    test('should render default logo styles', () => {
      const { getByText } = render(<Logo />);
      const logoText = getByText('Haseeb');
      expect(logoText.className).toBe('text-black text-sm font-header');
    });
  });

  describe('should render with styles', () => {
    test('should render with grey accents', () => {
      const { getByText, getByTestId } = render(
        <Logo accent="gray-500" color="black" />
      );
      const logoText = getByText('Haseeb');
      const openingTags = getByTestId('OpeningTag');
      const closingTags = getByTestId('ClosingTag');

      expect(logoText.className).toBe('text-black text-sm font-header');
      expect(closingTags.className).toBe('text-gray-500');
      expect(openingTags.className).toBe('text-gray-500');
    });

    test('should render with grey accents and blue colour', () => {
      const { getByText, getByTestId } = render(
        <Logo accent="gray-500" color="blue-500" />
      );
      const logoText = getByText('Haseeb');
      const openingTags = getByTestId('OpeningTag');
      const closingTags = getByTestId('ClosingTag');

      expect(logoText.className).toBe('text-blue-500 text-sm font-header');
      expect(closingTags.className).toBe('text-gray-500');
      expect(openingTags.className).toBe('text-gray-500');
    });
  });

  describe('should render different size', () => {
    test('larger text', () => {
      const { getByText } = render(<Logo size="4xl" />);
      const logoText = getByText('Haseeb');
      expect(logoText.className).toBe('text-black text-4xl font-header');
    });

    test('smaller text', () => {
      const { getByText } = render(<Logo size="xs" />);
      const logoText = getByText('Haseeb');
      expect(logoText.className).toBe('text-black text-xs font-header');
    });
  });
});
