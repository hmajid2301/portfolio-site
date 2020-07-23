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

import { ProgramTags } from '~/components/atoms/ProgramTags';
import { SocialLink } from '~/components/atoms/SocialLink';

export interface Props {
  /** The color of the text and social links. */
  color?: string;
  /** The data of the blog post. */
  date: string;
  /** The color on hover of the social links. */
  hoverColor?: string;
  /** How long it'll take to finish the article. */
  readingTime?: string;
  /** The tags/categories related to this blog post. */
  tags?: string[];
  /** The title of this blog post. */
  title: string;
  /** The url to share with the social links. */
  url: string;
}

const PostMeta = ({
  color = 'gray-800',
  date,
  hoverColor = 'blue-500',
  readingTime,
  tags,
  title,
  url,
}: Props) => {
  const socialProps = {
    color,
    hoverColor,
    url: '',
  };

  const socialMedia = [
    <FacebookShareButton url={url}>
      <SocialLink {...socialProps} icon={<Facebook />} />
    </FacebookShareButton>,
    <LinkedinShareButton url={url}>
      <SocialLink {...socialProps} icon={<LinkedIn />} />
    </LinkedinShareButton>,
    <RedditShareButton url={url}>
      <SocialLink {...socialProps} icon={<Reddit />} />
    </RedditShareButton>,
    <TwitterShareButton url={url}>
      <SocialLink {...socialProps} icon={<Twitter />} />
    </TwitterShareButton>,
  ];

  return (
    <Container className={`text-${color} text-center`}>
      <Date>{date}</Date>
      <Date>{readingTime}</Date>
      <Title>{title}</Title>
      {tags && (
        <ListContainer>
          {tags.map((category) => (
            <Item key={category}>
              <ProgramTags key={category} text={category} />
            </Item>
          ))}
        </ListContainer>
      )}

      <ListContainer>
        {socialMedia.map((social) => (
          <Item>{social}</Item>
        ))}
      </ListContainer>
    </Container>
  );
};

const Container = tw.div`flex flex-col my-20 font-body`;

const Date = tw.div`text-base md:text-xl mb-3 italic`;

const Title = tw.div`text-2xl md:text-4xl mb-3 font-thin`;

const ListContainer = tw.div`flex flex-row justify-center mb-4`;

const Item = tw.span`mr-1`;

export default PostMeta;
