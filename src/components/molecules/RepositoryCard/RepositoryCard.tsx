import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import {
  AiOutlineCompass as Compass,
  AiOutlineStar as Star,
} from 'react-icons/ai';
import { RiGitlabLine as GitLab } from 'react-icons/ri';
import tw from 'twin.macro';

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
  item: RepositoryItem;
}

export interface RepositoryItem {
  /** A short description of the project. */
  description: string;
  /** The project name. */
  name: string;
  /** Link to the project. */
  link?: string;
  /** The number of stars on the github repo. */
  stars: number;
  /** The url of the project. */
  url: string;
}

const RepositoryCard = ({ accent, background, color, hover, item }: Props) => {
  const itemClass = `text-${accent} hover:text-${hover}`;

  return (
    <Container
      className={`bg-${background} text-${color}`}
      data-testid="Container"
    >
      <HeaderText className={`text-${accent} hover:text-${hover}`}>
        <HeaderLink to={item.url}>{item.name}</HeaderLink>
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
