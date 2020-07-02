import React from 'react';

import ProgramTags from './ProgramTags';

import { render } from 'test-utils';

describe('<ProgramTags />', () => {
  describe('Props: Text', () => {
    test.each([
      ['docker', '#384d54', '#fff'],
      ['firebase', '#ffcb2b', '#222'],
      ['devops', '#22262f', '#dbe1e8'],
    ])(
      'Render with %i text',
      (text: string, background: string, color: string) => {
        const { getByText } = render(<ProgramTags text={text} />);

        const tag = getByText(`#${text}`);
        expect(tag).toHaveStyleRule('background-color', background);
        expect(tag).toHaveStyleRule('color', color);
      }
    );
  });

  describe('Href', () => {
    test.each([['docker'], ['firebase'], ['devops']])(
      'Render with %i text',
      (text: string) => {
        const { getByText } = render(<ProgramTags text={text} />);

        const tag = getByText(`#${text}`).closest('a') as HTMLAnchorElement;
        expect(tag.href).toBe(`http://localhost/tags/${text}`);
      }
    );
  });
});
