import {
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import styled from "styled-components";

import {
  CardContainer,
  CardHeaderContainer,
  CardTitle,
  ComponentContainer,
  chunkData,
  GridItem,
  Title,
} from "~/components/Common";
import { DarkModeContext } from "~/providers/DarkModeProvider";

interface Props {
  data: RepoData[];
  title: string;
}

export interface RepoData {
  alt: string;
  description: string;
  language: string;
  name: string;
  url: string;
}

interface CardData {
  description: string;
  language: string;
  name: string;
  url: string;
}

const ProjectCards = ({ data, title }: Props) => (
  <ComponentContainer>
    <Title>{title}</Title>
    <ProjectCardList data={data} />
  </ComponentContainer>
);

const ProjectCardList = ({ data }: { data: RepoData[] }) => {
  const chunkedData = chunkData(data, 3);
  const cards = chunkedData.map((repos: RepoData[], i: number) => (
    <Grid container spacing={5} key={i}>
      {repos.map((repo: RepoData, j: number) => (
        <ProjectCard data={repo} key={j} />
      ))}
    </Grid>
  ));
  return cards;
};

const ProjectCard = ({ data }: { data: CardData }) => {
  const mode = useContext(DarkModeContext).mode;

  return (
    <GridItem item lg>
      <CardContainer
        onClick={() => window.open(data.url, "_blank")}
        background={mode.shade}
        color={mode.color}
      >
        <CardHeader
          style={{ padding: "16px 0 0 0" }}
          title={
            <CardHeaderContainer>
              <CardTitle gutterBottom>{data.name}</CardTitle>
            </CardHeaderContainer>
          }
        />
        <CardContent>
          <ContentText>{data.description}</ContentText>
        </CardContent>
        <CardBottomContainer>
          {getLanguageAndColor(data.language)}
        </CardBottomContainer>
      </CardContainer>
    </GridItem>
  );
};

const getLanguageAndColor = (language: string) => {
  const languageColors: { [x: string]: string } = {
    Shell: "#89e051",
    Dockerfile: "#384d54",
    JavaScript: "#f1e05a",
    TypeScript: "#2b7489",
    Python: "#3572A5",
  };

  const color = languageColors[language];

  return (
    <LanguageContainer>
      <ColorDot color={color} />
      {language}
    </LanguageContainer>
  );
};

const ContentText = styled(Typography)`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
`;

const CardBottomContainer = styled(CardActions)`
  justify-content: center;
`;

const LanguageContainer = styled.div`
  font-weight: 300;
`;

const ColorDot = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  margin-right: 10px;
  width: 10px;
`;

export default ProjectCards;
