import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PocketShareButton,
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
  const classes =
    'hover:text-primary transition duration-300 mx-2 transform hover:scale-125';

  const socialMedia = [
    <FacebookShareButton url={url}>
      <Icon className={classes} icon="facebook" label="Facebook share button" />
    </FacebookShareButton>,
    <LinkedinShareButton url={url}>
      <Icon className={classes} icon="linkedin" label="LinkedIn share button" />
    </LinkedinShareButton>,
    <RedditShareButton url={url}>
      <Icon className={classes} icon="reddit" label="Reddit share button" />
    </RedditShareButton>,
    <WhatsappShareButton url={url}>
      <Icon className={classes} icon="whatsapp" label="Whatsapp share button" />
    </WhatsappShareButton>,
    <PocketShareButton url={url}>
      <Icon className={classes} icon="pocket" label="Pocket share button" />
    </PocketShareButton>,
    <TwitterShareButton url={url}>
      <Icon className={classes} icon="twitter" label="Twitter share button" />
    </TwitterShareButton>,
  ];

  return (
    <ShareContainer data-cy="Share" data-testid="Share">
      {socialMedia}
    </ShareContainer>
  );
};

const ShareContainer = tw.div`mx-10 py-5 border-accent border-t-2 text-3xl`;

export default ShareButton;
