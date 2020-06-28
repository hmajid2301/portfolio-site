import styled from '@emotion/styled';
import React from 'react';
import tw from 'twin.macro';

export interface Props {
  text: string;
}

type Language = {
  [name: string]: {
    background: string;
    color: string;
  };
};

const languages: Language = {
  docker: {
    background: '#384d54',
    color: '#fff',
  },
  dockercompose: {
    background: '#bac9d9',
    color: '#222',
  },
  firebase: {
    background: '#ffcb2b',
    color: '#222',
  },
  javascript: { background: '#f0db4f', color: '#222' },
  linux: { background: '#222', color: '#4FF14F' },
  python: { background: '#3572A5', color: '#fff' },
  react: { background: '#222', color: '#00d8ff' },
  reactnative: { background: '#222', color: '#00d8ff' },
  typescript: { background: '#2775c3', color: '#fff' },
};

const defaultLangauge = {
  background: '#22262f',
  color: '#dbe1e8',
};

const ProgramTags = ({ text }: Props) => {
  const language = languages[text] || defaultLangauge;

  return (
    <TagContainer href={`/tags/${text}`} data-testid="TagContainer">
      <TextContainer background={language.background} color={language.color}>
        #{text}
      </TextContainer>
    </TagContainer>
  );
};

const TagContainer = styled.a`
  text-decoration: none;
`;

const TextContainer = styled.span<{ background: string; color: string }>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  display: 'flex'
    ${tw`text-base  rounded-md p-2 font-header font-semibold px-3 tracking-wide mx-2`};
`;

export default ProgramTags;
