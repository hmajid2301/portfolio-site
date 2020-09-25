import React from 'react';
import { Box } from 'theme-ui';

import tw from 'twin.macro';

export interface Props {
  /** The data to show on the chart. */
  data: ChartData[];
  /** The title of the bar chart. */
  title: string;
}

export interface ChartData {
  /** The name of the item. */
  name: string;
  /** The percentage of the bar to be full. */
  percent: number;
  /** The count for this item. */
  count: number;
}

const VerticalBarChart = ({ data, title }: Props) => {
  return (
    <VerticalBarContainer>
      <Title>{title}</Title>
      <VerticalBarElement>
        {data.map((item) => {
          const { name, count, percent } = item;
          return (
            <Box
              key={name}
              className="flex flex-col justify-end"
              sx={{
                width: `${100 / data.length}%`,
              }}
            >
              <Text>{`x${count}`}</Text>
              <Box
                className="p-1 mx-1 bg-primary"
                sx={{
                  height: `${percent}%`,
                  p: 1,
                  mx: 1,
                }}
              />
              <Text>{name}</Text>
            </Box>
          );
        })}
      </VerticalBarElement>
    </VerticalBarContainer>
  );
};

const VerticalBarContainer = tw.div`flex h-80 font-body text-header flex-col`;

const VerticalBarElement = tw.div`flex flex-wrap h-full bg-background-alt p-2`;

const Title = tw.h1`text-2xl text-main my-10`;

const Text = tw.p`text-sm md:text-base text-center`;

export default VerticalBarChart;
