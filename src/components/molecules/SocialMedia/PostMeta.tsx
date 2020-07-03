import styled from '@emotion/styled';
import React from 'react';
import {
  AiFillFacebook as Facebook,
  AiFillLinkedin as LinkedIn,
  AiFillTwitterSquare as Twitter,
} from 'react-icons/ai';
import { FaRedditSquare as Reddit } from 'react-icons/fa';
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from 'react-share';
import tw from 'twin.macro';

import { ProgramTags } from '../../organisms/Post/node_modules/~/components/atoms/ProgramTags';

export interface Props {
  color: string;
  date: string;
  tags: string[];
  title: string;
  url: string;
}

const PostMeta = ({ color = 'gray-800', date, tags, title, url }: Props) => {
  const socialMedia = [
    <FacebookShareButton url={url}>
      <Facebook size="2em" />
    </FacebookShareButton>,
    <LinkedinShareButton url={url}>
      <LinkedIn />
    </LinkedinShareButton>,
    <RedditShareButton url={url}>
      <Reddit />
    </RedditShareButton>,
    <TwitterShareButton url={url}>
      <Twitter />
    </TwitterShareButton>,
  ];

  return (
    <Container className={`text-${color}`}>
      <div className="text-base md:text-xl mb-3 italic">{date}</div>
      <div className="text-4xl md:text-6xl mb-3 font-thin">{title}</div>
      <div className="flex flex-row mb-4">
        {tags.map((category) => (
          <span className="mr-1">
            <ProgramTags key={category} text={category} />
          </span>
        ))}
      </div>

      <div className="flex flex-row">
        {socialMedia.map((social) => (
          <span className="mr-1">{social}</span>
        ))}
      </div>
    </Container>
  );
};

const Container = tw.div`flex flex-col mx-auto max-w-2xl my-20 font-body`;

export default PostMeta;
