import React from 'react';
import { render } from 'test-utils';

import Logo from '../Logo';

describe('<Logo />', () => {
  describe('Default Logo', () => {
    test('Render with default styles', () => {
      const { getByText } = render(<Logo text="Haseeb" />);
      const logoText = getByText('Haseeb');
      expect(logoText.className).toBe(
        'cursor-pointer font-header font-black hover:text-blue-500 text-black text-2xl tracking-wide'
      );
    });
  });

  describe('Props: Text', () => {
    test('Render with text Haseeb', () => {
      const { getByText } = render(<Logo text="Haseeb" />);
      const logoText = getByText('Haseeb');
      expect(logoText).toBeTruthy();
    });

    test('Render with text Random', () => {
      const { getByText } = render(
        <Logo
          accent="gray-500"
          color="black"
          hoverColor="gray-500"
          text="Random"
        />
      );
      const logoText = getByText('Random');
      expect(logoText.className).toBeTruthy();
      expect(() => {
        getByText('Random123');
      }).toThrowError();
    });
  });

  describe('Props: Hover Color', () => {
    test('Render with purple hover color', () => {
      const { getByText } = render(
        <Logo
          accent="gray-500"
          color="black"
          hoverColor="purple-500"
          text="Haseeb"
        />
      );
      const logoText = getByText('Haseeb');
      expect(logoText.className).toContain('hover:text-purple-500');
    });

    test('Render with gray hover color', () => {
      const { getByText } = render(
        <Logo
          accent="gray-500"
          color="black"
          hoverColor="gray-500"
          text="Haseeb"
        />
      );
      const logoText = getByText('Haseeb');
      expect(logoText.className).toContain('hover:text-gray-500');
    });
  });

  describe('Props: Accent and Color', () => {
    test('Render with gray accent color and black text color', () => {
      const { getByText, getByTestId } = render(
        <Logo accent="gray-500" color="black" text="Haseeb" />
      );
      const logoText = getByText('Haseeb');
      const openingTags = getByTestId('OpeningTag');
      const closingTags = getByTestId('ClosingTag');

      expect(logoText.className).toContain('text-black');
      expect(closingTags.className).toContain('text-gray-500');
      expect(openingTags.className).toContain('text-gray-500');
    });

    test('Render with gray accents and blue text colour', () => {
      const { getByText, getByTestId } = render(
        <Logo accent="gray-500" color="blue-500" text="Haseeb" />
      );
      const logoText = getByText('Haseeb');
      const openingTags = getByTestId('OpeningTag');
      const closingTags = getByTestId('ClosingTag');

      expect(logoText.className).toContain('text-blue-500');
      expect(closingTags.className).toContain('text-gray-500');
      expect(openingTags.className).toContain('text-gray-500');
    });
  });

  describe('Props: size', () => {
    test('Render with larger text', () => {
      const { getByText } = render(<Logo size="4xl" text="Haseeb" />);
      const logoText = getByText('Haseeb');
      expect(logoText.className).toContain('text-4xl');
    });

    test('Render with smaller text', () => {
      const { getByText } = render(<Logo size="xs" text="Haseeb" />);
      const logoText = getByText('Haseeb');
      expect(logoText.className).toContain('text-xs');
    });
  });
});
