import React from 'react';
import tw from 'twin.macro';

import { MainCard, MainCardItem } from '~/components/molecules/MainCard';

export interface Props {
  /** The background color of the overlay text. */
  textBackground?: string;
  /** The item to show in the card. */
  projectItems: MainCardItem[];
}

const ProjectList = ({ projectItems }: Props) => {
  return (
    <ProjectListContainer>
      {projectItems.map((item) => (
        <ProjectCardContainer key={item.name}>
          <MainCard item={item} />
        </ProjectCardContainer>
      ))}
    </ProjectListContainer>
  );
};

const ProjectListContainer = tw.div`grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4`;

const ProjectCardContainer = tw.div`mb-24`;

export default ProjectList;
