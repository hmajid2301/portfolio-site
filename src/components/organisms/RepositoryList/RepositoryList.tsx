import React from 'react';
import tw from 'twin.macro';

import {
  RepositoryCard,
  RepositoryItem,
} from '~/components/molecules/RepositoryCard';

export interface Props {
  /** The item to show in the card. */
  items: RepositoryItem[];
}

const RepositoryList = ({ items: repositoryItems }: Props) => (
  <RepositoryListContainer>
    {repositoryItems.map((item) => (
      <RepositoryCardContainer key={item.url} data-cy="RepositoryCard">
        <RepositoryCard item={item} />
      </RepositoryCardContainer>
    ))}
  </RepositoryListContainer>
);

const RepositoryListContainer = tw.div`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4`;

const RepositoryCardContainer = tw.div`mb-4`;

export default RepositoryList;
