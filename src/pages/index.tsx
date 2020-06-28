import styled from '@emotion/styled';
import React from 'react';

import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: #201b21;
`;

const Index: React.FC = () => {
  return (
    <Layout>
      <SEO />
      <Container />
    </Layout>
  );
};

export default Index;
