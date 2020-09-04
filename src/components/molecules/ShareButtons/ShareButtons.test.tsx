import * as Gatsby from 'gatsby';
import React from 'react';

import ShareButtons from './ShareButtons';

import { render } from 'test-utils';
import config from '~/config/config.json';

describe('<ShareButtons />', () => {
  test.each([['/blog/first-post/', '/blog/my-second-post/']])(
    `check ShareButtons loads`,
    (link) => {
      const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
      useStaticQuery.mockImplementation(() => ({
        site: {
          siteMetadata: {
            siteUrl: config.siteData.siteUrl,
          },
        },
      }));
      const { getByTestId } = render(<ShareButtons link={link} />);
      const share = getByTestId('Share');
      expect(share.childNodes.length).toBe(6);
    }
  );
});
