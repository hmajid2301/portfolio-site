import { Container, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import styled from "styled-components";

import { chunkData, Title } from "~/components/Common";
import { ThemeContext } from "~/providers/ThemeProvider";

interface Props {
  data: ProjectData[];
  title: string;
}

export interface ProjectData {
  alt: string;
  background: string;
  content: string;
  image: string;
  name: string;
  url: string;
}

const ProjectList = ({ data, title }: Props) => (
  <ProjectsContainer>
    <Title>{title}</Title>
    <Container maxWidth="xl">
      <Projects data={data} />
    </Container>
  </ProjectsContainer>
);

const Projects = ({ data }: { data: ProjectData[] }) => {
  const chunkedData = chunkData(data, 2);
  const cards = chunkedData.map((items: ProjectData[], i: number) => (
    <Grid container spacing={5} key={i}>
      {items.map((item: ProjectData, j: number) => (
        <ProjectItem data={item} key={j} />
      ))}
    </Grid>
  ));
  return cards;
};

const ProjectItem = ({ data }: { data: ProjectData }) => {
  const primary = useContext(ThemeContext).theme;

  return (
    <Grid item lg>
      <ProjectItemContainer>
        <ImageContainer
          background={data.background}
          onClick={() => window.open(data.url, "_blank")}
        >
          <ProjectImage src={data.image} alt={data.alt} />
          <Overlay textColor={primary}>Go to project</Overlay>
        </ImageContainer>

        <TextContainer>
          <ProjectTitle gutterBottom variant="h4">
            {data.name}
          </ProjectTitle>
          <Content>{data.content}</Content>
        </TextContainer>
      </ProjectItemContainer>
    </Grid>
  );
};

const ProjectsContainer = styled.div`
  justify-content: center;
  padding: 30px;
  text-align: center;
`;

const ProjectItemContainer = styled.div`
  margin: 25px;

  @media (max-width: 300px) {
    margin: 0;
  }
`;

const ImageContainer = styled.div<{ background: string }>`
  background-color: ${props => props.background};
  cursor: pointer;
  max-height: 450px;
  height: 80%;
  padding: 20px;
  position: relative;
`;

const ProjectImage = styled.img`
  max-height: 450px;
  transition: filter 0.3s ease;
  padding: 20px;
  vertical-align: middle;

  ${ImageContainer}:hover & {
    filter: blur(30px);
  }

  @media (max-width: 1000px) {
    width: 75%;
  }
`;

const Overlay = styled.div<{ textColor: string }>`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  bottom: 0;
  color: ${props => props.textColor};
  display: flex;
  font-size: 2em;
  font-weight: 600;
  justify-content: center;
  left: 0;
  opacity: 0;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.5s ease;
  width: 100%;
  z-index: 10;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

const TextContainer = styled.div`
  margin-top: 25px;
`;

const ProjectTitle = styled(Typography)`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 1.5em;
  }

  @media (max-width: 350px) {
    font-size: 1em;
  }
`;

const Content = styled(Typography)`
  font-family: "Montserrat", sans-serif;
  text-align: left;

  @media (max-width: 1000px) {
    font-size: 1em;
  }

  @media (max-width: 350px) {
    font-size: 0.7em;
  }
`;

export default ProjectList;
