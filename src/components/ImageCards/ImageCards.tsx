import { CardHeader, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import styled from "styled-components";

import {
  CardContainer,
  CardHeaderContainer,
  CardTitle,
  ComponentContainer,
  GridItem,
  Title
} from "~/components/Common";
import { DarkModeContext } from "~/providers/DarkModeProvider";

interface Props {
  data: CardData[];
  title: string;
}

export interface CardData {
  alt: string;
  name: string;
  image: string;
  url: string;
}

const ImageCards = ({ data, title }: Props) => (
  <ComponentContainer>
    <Title>{title}</Title>
    <Grid container spacing={5}>
      {data.map((item: CardData, i: number) => (
        <ImageCard data={item} key={i} />
      ))}
    </Grid>
  </ComponentContainer>
);

const ImageCard = ({ data }: { data: CardData }) => {
  const mode = useContext(DarkModeContext).mode;

  return (
    <GridItem item lg>
      <CardContainer
        onClick={() => window.open(data.url, "_blank")}
        background={mode.shade}
        color={mode.color}
      >
        <CardImage src={data.image} alt={data.alt} />
        <CardHeader
          title={
            <CardHeaderContainer>
              <CardTitle gutterBottom>{data.name}</CardTitle>
            </CardHeaderContainer>
          }
        />
      </CardContainer>
    </GridItem>
  );
};

const CardImage = styled.img`
  height: 175px;
  width: auto;
`;

export default ImageCards;
