import styled from '@emotion/styled';
import React from 'react';
import { Box } from 'theme-ui';

import tw from 'twin.macro';

export interface Props {
  /** The data to show on the chart. */
  data: {
    /** The name of the item. */
    name: string;
    /** The percentage of the bar to be full. */
    percent: number;
    /** The count for this item. */
    count: number;
  }[];
  /** The title of the bar chart. */
  title: string;
}

const HorizontalBarChart = ({ data, title }: Props) => {
  return (
    <>
      <Title>{title}</Title>
      {data.map((item) => {
        const { name, count, percent } = item;
        return (
          <HorizontalBarContainer key={name}>
            <Bar
              sx={{
                width: `${percent}%`,
              }}
            />
            <BarText>
              <p>{name}</p>
              <p>{`x${count}`}</p>
            </BarText>
          </HorizontalBarContainer>
        );
      })}
    </>
  );
};

const HorizontalBarContainer = tw.div`relative flex-col bg-background-alt mb-2 text-main`;

const Title = tw.h1`text-2xl font-body text-header my-10`;

const Bar = styled(Box)`
  ${tw`bg-primary h-full absolute`}
`;

const BarText = styled(Box)`
  ${tw`relative flex justify-between font-body px-4 py-2`}
`;

export default HorizontalBarChart;
