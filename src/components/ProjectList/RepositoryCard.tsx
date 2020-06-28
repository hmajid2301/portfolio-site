import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';
import {
  AiOutlineCompass as Compass,
  AiOutlineStar as Star,
} from 'react-icons/ai';
import { RiGitlabLine as GitLab } from 'react-icons/ri';

export interface Props {
  /** The colour of the title and the meta items. */
  accent?: string;
  /** The background color of the header. */
  background?: string;
  /** The colour of main text. */
  color?: string;
  /** The colour when you hover over the nav bar links. */
  hover?: string;
  /** The item to show in the card. */
  item: Item;
}

export type Item = {
  name: string;
  description: string;
  link: string;
  stars: number;
  url: string;
};

const RepositoryCard = ({
  accent = 'blue-500',
  background = 'white',
  color = 'gray-800',
  hover = 'gray-700',
  item,
}: Props) => {
  const itemClass = `text-${accent} hover:text-${hover}`;

  return (
    <Container
      className={`bg-${background} text-${color}`}
      data-testid="Container"
    >
      <HeaderText className={`text-${accent} hover:text-${hover}`}>
        <HeaderLink to={item.link}>{item.name}</HeaderLink>
      </HeaderText>
      <MainText>{item.description}</MainText>
      <MetaContainer color={color}>
        <MetaItem className={itemClass} href={item.url}>
          <Compass /> More info
        </MetaItem>

        <MetaItem className={itemClass} href={item.url}>
          <GitLab /> Gitlab
        </MetaItem>

        <MetaItem className={itemClass} href={`${item.url}/stargazers`}>
          <Star /> {item.stars}
        </MetaItem>
      </MetaContainer>
    </Container>
  );
};

const Container = tw.div`flex-wrap items-start rounded-md mx-auto px-8 py-8 max-w-lg my-20 shadow font-body`;

const HeaderText = tw.h1`text-lg font-normal`;

const HeaderLink = styled(Link)``;

const MainText = tw.p`text-base pb-8`;

const MetaContainer = tw.p`flex self-end justify-between`;

const MetaItem = styled.a`
  svg {
    ${tw`inline-block`}
  }
`;

export default RepositoryCard;
