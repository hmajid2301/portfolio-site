import {
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  SvgIcon,
  Typography
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
  Title
} from "~/components/Common";
import { DarkModeContext } from "~/providers/DarkModeProvider";

interface Props {
  data: RepoData[];
  title: string;
}

export interface RepoData {
  name: string;
  url: string;
  description: string;
  language: string;
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
              <IconContainer>
                <path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path>
              </IconContainer>

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
    Dockerfile: "#384d54",
    Javascript: "#f1e05a",
    TypeScript: "#2b7489",
    Python: "#3572A5"
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

const IconContainer = styled(SvgIcon)`
  color: #6a737d;
  padding-top: 5px;
  margin: 0;
`;

const CardBottomContainer = styled(CardActions)`
  justify-content: center;
`;

const LanguageContainer = styled.div`
  font-weight: 300;
`;

const ColorDot = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  margin-right: 10px;
  width: 10px;
`;

export default ProjectCards;
