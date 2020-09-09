import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

export interface NextLink {
  frontmatter: { slug: string; title: string };
}

export interface Props {
  next: NextLink;
  previous: NextLink;
}

const NextButtons = ({ next, previous }: Props) => (
  <section>
    <NextArticleContainer>
      {previous && (
        <NextLink to={`/blog/${previous.frontmatter.slug}`}>
          <NextButton>Previous</NextButton>
          <NextHeader>{previous.frontmatter.title}</NextHeader>
        </NextLink>
      )}

      {next && (
        <NextLink className="text-right" to={`/blog/${next.frontmatter.slug}`}>
          <NextButton>Next</NextButton>
          <NextHeader>{next.frontmatter.title}</NextHeader>
        </NextLink>
      )}
    </NextArticleContainer>
  </section>
);
const NextArticleContainer = tw.div`max-w-screen-md mx-auto grid grid-flow-col grid-cols-2 gap-4`;

const NextLink = styled(Link)`
  ${tw`bg-background-alt rounded-md p-8 font-body z-10`}
`;

const NextButton = tw.span`text-main uppercase text-accent`;

const NextHeader = tw.h3`text-header my-5`;

export default NextButtons;
