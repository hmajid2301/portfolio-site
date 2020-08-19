import React from 'react';

import RepositoryCard from './RepositoryCard';

import { render } from 'test-utils';

describe('<RepositoryCard />', () => {
  test.each([
    [
      {
        description: 'This is a repo I made',
        name: 'live-light',
        stars: 10,
        url: 'https://github.com/hmajid2301/live-light',
      },
      {
        description: 'This is another repo I made!!!',
        name: 'live-light2',
        stars: 100,
        url: 'https://github.com/hmajid2301/live-light2',
      },
    ],
  ])(`check RepositoryCard loads`, (item) => {
    const { getByText, getByLabelText } = render(
      <RepositoryCard item={item} />
    );

    const repoTitle = getByText(item.name);
    const description = getByText(item.description);
    const moreInfo = getByText('More Info');
    const stars = getByLabelText(
      `number of stars on github/gitlab for ${item.name}`
    );

    expect(moreInfo).toHaveAttribute('href', item.url);
    expect(moreInfo).toHaveAttribute('target', '_blank');
    expect(stars.parentElement).toHaveAttribute(
      'href',
      `${item.url}/stargazers`
    );
    expect(stars.parentElement).toHaveAttribute('target', '_blank');
    expect(repoTitle).toBeTruthy();
    expect(description).toBeTruthy();
  });
});
