import styled from '@emotion/styled';
import scrollTo from 'gatsby-plugin-smoothscroll';
import React, { useEffect } from 'react';
import tw from 'twin.macro';

import { Icon } from '~/components/atoms/Icon';

export default function ScrollButton({ anchor }: { anchor: string }) {
  const scrollListener = () => {
    const scrollButton = document.getElementById('ScrollButton');
    if (scrollButton) {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        scrollButton.style.display = 'block';
      } else {
        scrollButton.style.display = 'none';
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  });

  return (
    <ScrollContainer id="ScrollButton">
      <Icon
        icon="up"
        label="Scroll Icon"
        onClick={() => scrollTo(anchor)}
        size="3em"
      />
    </ScrollContainer>
  );
}

const ScrollContainer = styled.div`
  ${tw`hidden fixed z-50`};
  bottom: 18px;
  right: 18px;
`;
