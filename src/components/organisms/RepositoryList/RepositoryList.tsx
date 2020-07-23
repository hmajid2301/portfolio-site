import React from 'react';
import tw from 'twin.macro';

import {
  RepositoryCard,
  RepositoryItem,
} from '~/components/molecules/RepositoryCard';
import chunkData from '~/helpers/chunkData';

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
  repositoryItems: RepositoryItem[];
}

const RepositoryList = ({
  accent = 'gray-700',
  background = 'white',
  color = 'gray-800',
  hover = 'blue-500',
  repositoryItems,
}: Props) => {
  const data: RepositoryItem[][] = chunkData(repositoryItems, 3);

  return (
    <div>
      {data.map((repoRow) => (
        <RepoRow
          accent={accent}
          background={background}
          color={color}
          hover={hover}
          repositoryItems={repoRow}
        />
      ))}
    </div>
  );
};

const RepoRow = ({
  accent,
  background,
  color,
  repositoryItems: data,
  hover,
}: Props) => {
  const blogRow = data.map((repositoryItem: RepositoryItem) => (
    <RepositoryCardContainer key={repositoryItem.name}>
      <RepositoryCard
        accent={accent}
        background={background}
        color={color}
        hover={hover}
        item={repositoryItem}
      />
    </RepositoryCardContainer>
  ));

  return <RepositoryRowContainer>{blogRow}</RepositoryRowContainer>;
};

const RepositoryRowContainer = tw.div`flex flex-col md:flex-row items-center`;

const RepositoryCardContainer = tw.div`m-4`;

export default RepositoryList;
