import styled from '@emotion/styled';
import React from 'react';
import tw from 'twin.macro';

import config from '~/config/config.json';

export interface Props {
  headings: {
    value: string;
    depth: number;
  }[];
}

const ToC = ({ headings }: Props) => (
  <Toc>
    <Title>Table of contents</Title>
    <InnerScroll
      primary={config.siteData.primary}
      primaryAlt={config.siteData['primary-alt']}
    >
      {headings.map((heading) => {
        if (heading.depth > 4) {
          return <div />;
        }

        return (
          <ToCElement key={heading.value}>
            <ToCLink
              key={heading.value}
              href={`#${heading.value
                .replace(/\s+/g, '-')
                .replace('.', '')
                .replace('(', '')
                .replace(')', '')
                .replace('/', '')
                .toLowerCase()}`}
            >
              {heading.value}
            </ToCLink>
          </ToCElement>
        );
      })}
    </InnerScroll>
  </Toc>
);

const Toc = styled.ul`
  ${tw`bg-background-alt text-main font-body fixed hidden lg:flex flex-col rounded p-3 my-3`};
  width: 20rem;
  left: calc(50% + 400px);
  top: 80px;
  max-height: 30vh;
`;

const Title = tw.h2`text-2xl mb-2`;

const ToCElement = tw.li`p-1 leading-5 ml-4 mb-4 mr-4 leading-3`;

const ToCLink = tw.a`hover:text-secondary transition duration-300`;

const InnerScroll = styled.div<{ primary: string; primaryAlt: string }>`
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.primary} ${(props) => props.primaryAlt};
  overflow: hidden auto;
`;

export default ToC;
