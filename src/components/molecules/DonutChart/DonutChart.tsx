import React from 'react';
import { Donut } from 'theme-ui';

import tw from 'twin.macro';

export interface Props {
  /** The number of items to get the average from. */
  length: number;
  /** The title of the chart. */
  title: string;
  /** The total number of items added together. */
  total: number;
  /** Units name. */
  unit: string;
}

const DonutChart = ({ length, title, total, unit }: Props) => {
  const average = Math.floor(total / length);
  return (
    <DonutA>
      <Title>{title}</Title>
      <DonutContainer>
        <ChartContainer>
          <Donut
            sx={{ mx: 3, mb: 2, color: '#367ee9' }}
            value={average / total}
          />
          <InnerTextContainer>
            <Count>{average.toLocaleString()}</Count>
            <SmallText>{unit}</SmallText>
          </InnerTextContainer>
        </ChartContainer>
        <SmallText>
          Total {unit}: {total.toLocaleString()}
        </SmallText>
      </DonutContainer>
    </DonutA>
  );
};

const DonutA = tw.div`font-body text-main`;

const DonutContainer = tw.div`flex items-center justify-center flex-col bg-secondary-background py-8`;

const Title = tw.h1`text-2xl my-4 font-body text-header`;

const ChartContainer = tw.div`flex items-center justify-center relative my-4`;

const InnerTextContainer = tw.div`absolute text-primary`;

const Count = tw.div`font-semibold text-2xl`;

const SmallText = tw.div`text-base`;

export default DonutChart;
