import React from 'react';

import { Layout } from '~/components/Layout';
import { Hero } from '~/components/molecules/Hero';
import { MainCardItem } from '~/components/molecules/MainCard';
import { RepositoryItem } from '~/components/molecules/RepositoryCard';
import { ProjectList } from '~/components/organisms/ProjectsList';
import { RepositoryList } from '~/components/organisms/RepositoryList';
import metaData from '~/content/meta.json';
import projects from '~/content/projects.json';
import repositories from '~/content/repository.json';

const Index: React.FC = () => {
  const projectItems: MainCardItem[] = [];
  Object.values(projects).forEach((value) => {
    projectItems.push(value);
  });

  const repositoryItems: RepositoryItem[] = [];
  Object.values(repositories).forEach((value) => {
    repositoryItems.push(value);
  });

  return (
    <Layout>
      <Hero
        background="gray-200"
        color="black"
        showParticles
        text={metaData.hero_text}
      />
      <h1>Main Projects</h1>
      <ProjectList
        background="black"
        color="white"
        projectItems={projectItems}
        textBackground="blue-500"
      />
      <h1>Other Projects</h1>
      <RepositoryList
        accent="gray-700"
        background="white"
        color="gray-800"
        hover="blue-500"
        repositoryItems={repositoryItems}
      />
    </Layout>
  );
};

export default Index;
