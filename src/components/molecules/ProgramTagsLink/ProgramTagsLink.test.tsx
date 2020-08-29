import React from 'react';

import ProgramTagsLink from './ProgramTagsLink';

import { render } from 'test-utils';

describe('<ProgramTagsLink />', () => {
  test.each([
    ['', 'javascript', ''],
    ['', 'python', '2xl'],
    ['text-primary', 'typescript', ''],
    ['bg-primary', 'project-management', ''],
  ])(`check ProgramTags loads`, (className, text, size) => {
    const { getByTestId } = render(
      <ProgramTagsLink
        className={className}
        size={size || undefined}
        text={text}
      />
    );
    const tags = getByTestId('ProgramTagLink');
    expect(tags).toHaveAttribute('href', `/blog?tag=${text}`);
    expect(tags.className).toContain(className);
  });
});
