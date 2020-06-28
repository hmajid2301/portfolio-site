import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { ProgramTags as Tags } from '~/components/ProgramTags';

export interface Props {
  /** The colour of main text. */
  color?: string;
  /** The items to show in the post. */
  items: Item[];
  /** The number of item per row. */
  rowSize?: number;
  /** The text color of the main text. */
  textColor?: string;
}

export type Item = {
  tags?: string[];
  date?: string;
  image: string;
  title: string;
  url: string;
};

const postBackgroundSizeAnimation = {
  rest: {
    backgroundSize: '100%',
  },
  hover: {
    backgroundSize: '110%',
  },
};

const CardList = ({
  color = 'blue-500',
  items,
  rowSize = 3,
  textColor = 'gray-700',
}: Props) => (
  <Container>
    <Content>
      <ColumnContainer>
        {items.map((item) => (
          <Column
            key={item.title}
            className={`lg:w-1/${rowSize}`}
            data-testid={`Column-${item.title}`}
          >
            <Card
              initial="rest"
              whileHover="hover"
              animate="rest"
              className={`text-${textColor}`}
              data-testid={`Card-${item.title}`}
            >
              <Link to={item.url}>
                <Image
                  transition={{ duration: 0.3 }}
                  variants={postBackgroundSizeAnimation}
                  image={item.image}
                />
                <Details>
                  <Date className={`text-${textColor}`}>{item.date}</Date>
                  <MetaContainer>
                    <Meta>
                      {item.tags &&
                        item.tags.map((category) => (
                          <Tags key={category} text={category} />
                        ))}
                    </Meta>
                  </MetaContainer>
                  <Title>{item.title}</Title>
                  <Button
                    className={`hover:border-${color} text-${color}`}
                    href={item.url}
                  >
                    Read More
                  </Button>
                </Details>
              </Link>
            </Card>
          </Column>
        ))}
      </ColumnContainer>
    </Content>
  </Container>
);

const Container = tw.div`relative`;

const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ColumnContainer = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;

const Column = tw.div`mt-24 `;

const Card = styled(motion.div)`
  ${tw`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full bg-gray-100`}
`;

const Image = styled(motion.div)<{ image: string }>`
  background-image: url("${(props) => props.image}");
  ${tw`bg-cover bg-center h-64 rounded`}
`;

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-gray-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;

const MetaContainer = tw.div`flex items-center`;

const Meta = tw.div`flex items-center leading-none mr-6 last:mr-0 pt-5 pb-2`;

const Title = tw.h5`mt-4 leading-snug font-header font-bold text-lg`;

const Button = tw.a`inline-block mt-2 text-sm font-bold cursor-pointer transition duration-300 border-b-2 border-transparent`;

const Date = tw.p`p-0 italic`;

export default CardList;
