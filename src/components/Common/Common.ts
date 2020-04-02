import { Card, Grid, Typography } from "@material-ui/core";
import styled from "styled-components";

import {
  ForegroundColors,
  SecondaryColors
} from "~/providers/DarkModeProvider";

export function chunkData(list: any[], size: number) {
  return list.reduce(
    (rows: any, key, index) =>
      (index % size === 0
        ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows,
    []
  );
}

export const GridItem = styled(Grid)`
  width: 100%;
`;

export const CardContainer = styled(Card)<{
  background: SecondaryColors;
  color: ForegroundColors;
}>`
  border-radius: 0;
  background: ${props => props.background};
  color: ${props => props.color};
  padding-top: 25px;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    box-shadow: 0 7px 5px -6px ${props => props.color};
    position: relative;
    top: -15px;
  }
`;

export const CardHeaderContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 10px;
`;

export const CardTitle = styled(Typography)`
  font-family: "Montserrat", sans-serif;
  font-size: 0.75em;
  font-weight: 800;
`;

export const ComponentContainer = styled.div`
  justify-content: center;
  padding: 30px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3.5em;
  font-weight: 300;

  @media (max-width: 1000px) {
    font-size: 2em;
  }
`;
