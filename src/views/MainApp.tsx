import React, { useContext } from "react";
import styled from "styled-components";

import Introduction from "~/components/Introduction";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import ProjectCards, { RepoData } from "~/components/ProjectCards";
import ImageCards from "~/components/ImageCards";
import ProjectList from "~/components/ProjectList";
import articles from "~/data/Articles";
import repos from "~/data/GithubRepos";
import packages from "~/data/PackageIndex";
import projects from "~/data/Projects";
import {
  BackgroundColors,
  DarkModeContext,
  ForegroundColors
} from "~/providers/DarkModeProvider";

const MainApp = () => {
  const { mode } = useContext(DarkModeContext);

  return (
    <AppContainer background={mode.background} color={mode.color}>
      <Header />
      <Introduction />
      <ProjectList data={projects} title="Main Projects" />
      <ProjectCards data={repos as RepoData[]} title="Open Source Projects" />
      <ImageCards data={packages} title="Package Index Repos" />
      <ImageCards data={articles} title="Publications" />
      <Footer />
    </AppContainer>
  );
};

const AppContainer = styled.div<{
  background: BackgroundColors;
  color: ForegroundColors;
}>`
  background: ${props => props.background};
  color: ${props => props.color};
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  flex: 1;
`;

export default MainApp;
