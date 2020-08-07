import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import {
  AiOutlineTwitter as Twitter,
  AiFillLinkedin as LinkedIn,
} from 'react-icons/ai';
import { FaFacebookF as Facebook } from 'react-icons/fa';
import { GrReddit as Reddit } from 'react-icons/gr';
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from 'react-share';
import tw from 'twin.macro';

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

  const url = `${site.siteMetadata.siteUrl}/${link}/`;
  const classes = 'hover:text-primary transition duration-300 mx-2';

  const socialMedia = [
    <FacebookShareButton url={url}>
      <Facebook className={classes} />
    </FacebookShareButton>,
    <LinkedinShareButton url={url}>
      <LinkedIn className={classes} />
    </LinkedinShareButton>,
    <RedditShareButton url={url}>
      <Reddit className={classes} />
    </RedditShareButton>,
    <TwitterShareButton url={url}>
      <Twitter className={classes} />
    </TwitterShareButton>,
  ];

  return <ShareContainer>Share {socialMedia}</ShareContainer>;
};

const ShareContainer = tw.div`mx-10 py-5 border-accent border-t-2`;

export default ShareButton;
