import * as Gatsby from 'gatsby';
import React from 'react';

import ShareButtons from './ShareButtons';

import { render } from 'test-utils';

describe('<ShareButtons />', () => {
  test.each([['/blog/first-post/', '/blog/my-second-post/']])(
    `check ShareButtons loads`,
    (link) => {
      const url = 'https://haseebmajid.dev';
      const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
      useStaticQuery.mockImplementation(() => ({
        site: {
          siteMetadata: {
            siteUrl: url,
          },
        },
      }));
      const { getByText } = render(<ShareButtons link={link} />);
      const share = getByText('Share', { exact: false });
      expect(share.childNodes.length).toBe(5);
    }
  );
});
