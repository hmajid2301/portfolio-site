import { Link } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

import { Layout } from '~/components/Layout';

const NotFoundPage = () => (
  <Layout title="Page Not Found">
    <PageContainer>
      <MainText>404</MainText>
      <SecondaryText>Sorry, this page does not exist.</SecondaryText>
      <HomeButton type="button">
        <Link to="/">Back to homepage</Link>
      </HomeButton>
    </PageContainer>
  </Layout>
);

const PageContainer = tw.section`max-w-screen-xl min-h-screen flex mx-auto items-center justify-center flex-col font-header text-main text-4xl`;

const MainText = tw.h1`text-primary text-xxl`;

const SecondaryText = tw.h2`font-body`;

const HomeButton = tw.button`text-2xl px-4 my-10 p-2 rounded-full bg-primary transition duration-300 hover:bg-blue-800`;

export default NotFoundPage;
