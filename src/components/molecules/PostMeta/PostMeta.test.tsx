import React from 'react';

import PostMeta from './PostMeta';

import { render } from 'test-utils';

describe('<PostMeta />', () => {
  test.each([
    [
      '2010-08-14',
      '2 min read',
      ['blog-post', 'python', 'javascript'],
      'My blog post!',
      '108',
    ],
    [
      '2020-05-14',
      '10 min read',
      ['css', 'js', 'html'],
      'My second blog post!',
      '248',
    ],
  ])(`check PostMeta loads`, (date, readingTime, tags, title, words) => {
    const { getByText } = render(
      <PostMeta
        date={date}
        editLink="https://random.com"
        readingTime={readingTime}
        tags={tags}
        title={title}
        words={words}
      />
    );
    const titleText = getByText(title);
    const dateText = getByText(date);
    const reading = getByText(`${readingTime} / ${words} words`);

    expect(titleText).toBeTruthy();
    expect(dateText).toBeTruthy();
    expect(reading).toBeTruthy();
    tags.forEach((tag) => {
      const tagText = getByText(tag, { exact: false });
      expect(tagText).toBeTruthy();
    });
  });
});
