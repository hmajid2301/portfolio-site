import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from 'react-share';
import tw from 'twin.macro';

import { Icon } from '~/components/atoms/Icon';

export interface Props {
  /** The url of the post to share. */
  link: string;
}

const ShareButton = ({ link }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  );

  const url = `${site.siteMetadata.siteUrl}${link}`;
  const classes = 'hover:text-primary transition duration-300 mx-2';

  const socialMedia = [
    <FacebookShareButton url={url}>
      <Icon className={classes} icon="facebook" />
    </FacebookShareButton>,
    <LinkedinShareButton url={url}>
      <Icon className={classes} icon="linkedin" />
    </LinkedinShareButton>,
    <RedditShareButton url={url}>
      <Icon className={classes} icon="reddit" />
    </RedditShareButton>,
    <TwitterShareButton url={url}>
      <Icon className={classes} icon="twitter" />
    </TwitterShareButton>,
  ];

  return <ShareContainer>Share {socialMedia}</ShareContainer>;
};

const ShareContainer = tw.div`mx-10 py-5 border-accent border-t-2`;

export default ShareButton;
