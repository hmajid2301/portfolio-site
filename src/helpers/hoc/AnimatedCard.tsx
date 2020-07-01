import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React from 'react';

export interface Props {
  /** Extra classes to assign to this component. */
  className?: string;
  /** Children components. */
  children: React.ReactNode;
  /** Test ID to use with React testing library. */
  testId?: string;
}

const AnimatedCard = ({ className, children, testId }: Props) => (
  <Card
    animate="rest"
    className={className}
    data-testid={testId}
    initial="rest"
    whileHover="hover"
  >
    {children}
  </Card>
);

const Card = styled(motion.div)``;

export default AnimatedCard;
