import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { languages, defaultLangauge } from './data';

export interface Props {
  /** If active will not make it dimmer. */
  active?: boolean;
  /** Extra css classes to apply to tag container. */
  className?: string;
  /** Function to call when the tag is pressed/clicked. */
  onClick?: () => void;
  /** The text/language to show in a tag format i.e. javascript. */
  text: string;
  /** The font-size of the program tags. */
  size?: string;
}

const ProgramTags = ({
  active = false,
  className,
  onClick,
  text,
  size = 'base',
}: Props) => {
  const language = languages[text] || defaultLangauge;

  return (
    <span
      className={className}
      data-cy="ProgramTag"
      data-testid="ProgramTag"
      // to={active ? `/tag/${text}/` : ``}
      onClick={onClick}
    >
      <TextContainer
        active={active}
        background={language.background}
        className={`text-${size} mx-1`}
        color={language.color}
      >
        #{text}
      </TextContainer>
    </span>
  );
};

const TagContainer = styled(Link)`
  text-decoration: none;
`;

const TextContainer = styled.span<{
  active: boolean;
  background: string;
  color: string;
}>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  filter: ${(props) => (props.active ? 'brightness(100%)' : 'brightness(50%)')};
  ${tw`rounded p-2 font-header font-semibold tracking-wide bg-opacity-25 hover:bg-primary hover:text-header transition duration-300 cursor-pointer`};
`;

export default ProgramTags;
