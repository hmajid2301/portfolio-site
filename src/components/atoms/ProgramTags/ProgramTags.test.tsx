import React from 'react';

import { languages, defaultLangauge } from './data';
import ProgramTags from './ProgramTags';

import { render } from 'test-utils';

describe('<ProgramTags />', () => {
  test.each([
    ['', 'javascript', ''],
    ['', 'python', '2xl'],
    ['text-primary', 'typescript', ''],
    ['bg-primary', 'project-management', ''],
  ])(`check ProgramTags loads`, (className, text, size) => {
    const { getByText } = render(
      <ProgramTags className={className} size={size || undefined} text={text} />
    );
    const language = languages[text] || defaultLangauge;
    const tags = getByText(`#${text}`);

    expect(tags.parentElement?.className).toContain(className);
    expect(tags.className).toContain(size ? `text-${size}` : 'text-base');
    expect(tags).toHaveStyle(`background-color: ${language.background}`);
    expect(tags).toHaveStyle(`color: ${language.color}`);
  });
});
