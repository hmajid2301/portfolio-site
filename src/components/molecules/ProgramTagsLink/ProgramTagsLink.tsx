import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { ProgramTags } from '~/components/atoms/ProgramTags';

export interface Props {
  /** Extra css classes to apply to tag container. */
  className?: string;
  /** The text/language to show in a tag format i.e. javascript. */
  text: string;
  /** The font-size of the program tags. */
  size?: string;
}

const ProgramTagsLink = ({ className, text, size = 'base' }: Props) => (
  <TagContainer
    className={className}
    data-cy="ProgramTagLink"
    data-testid="ProgramTagLink"
    to={`/blog?tag=${text}`}
  >
    <ProgramTags active size={size} text={text} />
  </TagContainer>
);

const TagContainer = styled(Link)`
  ${tw`outline-none no-underline`}
`;

export default ProgramTagsLink;
