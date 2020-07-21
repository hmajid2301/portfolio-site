import React from 'react';
import tw from 'twin.macro';

import { MainCard, MainCardItem } from '~/components/molecules/MainCard';
import chunkData from '~/helpers/chunkData';

export interface Props {
  /** The background color of the overlay. */
  background?: string;
  /** The color of main text. */
  color?: string;
  /** The background color of the overlay text. */
  textBackground?: string;
  /** The item to show in the card. */
  projectItems: MainCardItem[];
}

const ProjectList = ({
  background = 'black',
  color = 'white',
  textBackground = 'blue-500',
  projectItems,
}: Props) => {
  const data: MainCardItem[][] = chunkData(projectItems, 2);

  return (
    <div>
      {data.map((projectRow) => (
        <ProjectCardRow
          background={background}
          color={color}
          projectItems={projectRow}
          textBackground={textBackground}
        />
      ))}
    </div>
  );
};

const ProjectCardRow = ({
  background,
  color,
  projectItems,
  textBackground,
}: Props) => {
  const projectRow = projectItems.map((projectItem: MainCardItem) => (
    <ProjectCardContainer>
      <MainCard
        background={background}
        color={color}
        item={projectItem}
        textBackground={textBackground}
      />
    </ProjectCardContainer>
  ));

  return <ProjectRowContainer>{projectRow}</ProjectRowContainer>;
};

const ProjectRowContainer = tw.div`flex flex-col md:flex-row items-center`;

const ProjectCardContainer = tw.div`m-4`;

export default ProjectList;
