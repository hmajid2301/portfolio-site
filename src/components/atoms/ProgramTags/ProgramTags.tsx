import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { languages, defaultLangauge } from './data';

export interface Props {
  /** Extra css classes to apply to tag container. */
  className?: string;
  /** The text/language to show in a tag format i.e. javascript. */
  text: string;
  /** The font-size of the program tags. */
  size?: string;
}

const ProgramTags = ({ className, text, size = 'base' }: Props) => {
  const language = languages[text] || defaultLangauge;

  return (
    <TagContainer className={className} to={`/tags/${text}/`}>
      <TextContainer
        background={language.background}
        className={`text-${size} mx-1`}
        color={language.color}
      >
        #{text}
      </TextContainer>
    </TagContainer>
  );
};

const TagContainer = styled(Link)`
  text-decoration: none;
`;

const TextContainer = styled.span<{ background: string; color: string }>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  ${tw`rounded p-2 font-header font-semibold tracking-wide bg-opacity-25 hover:bg-primary hover:text-header transition duration-300`};
`;

export default ProgramTags;
