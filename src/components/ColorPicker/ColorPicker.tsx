import React from "react";
import { Backdrop, Grid, Container } from "@material-ui/core";
import styled from "styled-components";

import { chunkData } from "~/components/Common";

interface ColorsProps {
  colors: string[];
  onClickColor: (color: string) => void;
  onMouseEnterColor: (color: string) => void;
  onMouseLeavePicker: () => void;
  open: boolean;
}

interface ColorProps {
  color: string;
  onClickColor: (color: string) => void;
  onMouseEnterColor: (color: string) => void;
}

const ColorPicker = (props: ColorsProps) => (
  <PickerContianer open={props.open}>
    <ColorPickerContainer
      maxWidth="sm"
      onMouseLeave={() => {
        props.onMouseLeavePicker();
      }}
    >
      <Colors {...props} />
    </ColorPickerContainer>
  </PickerContianer>
);

const Colors = (props: ColorsProps) => {
  const chunkedData = chunkData(props.colors, 4);
  const colorItems = chunkedData.map((colorsRow: string[], i: number) => (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      key={i}
      spacing={3}
    >
      {colorsRow.map((color: string, j: number) => (
        <Color color={color} key={j} {...props} />
      ))}
    </Grid>
  ));

  return colorItems;
};

const Color = (props: ColorProps) => (
  <ColorContainer item xs={4} sm={2}>
    <ColorItem
      color={props.color}
      onClick={() => {
        props.onClickColor(props.color);
      }}
      onMouseEnter={() => {
        props.onMouseEnterColor(props.color);
      }}
    />
  </ColorContainer>
);

const PickerContianer = styled(Backdrop)`
  cursor: default;
`;

const ColorPickerContainer = styled(Container)`
  background-color: white;
  width: 80%;
`;

const ColorContainer = styled(Grid)`
  margin: 10px;
`;

const ColorItem = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 80%;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  &:hover {
    border-radius: 100%;
  }
`;

export default ColorPicker;
