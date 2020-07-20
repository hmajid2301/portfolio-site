/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Footer } from '~/components/organisms/Footer';
import { Header } from '~/components/organisms/Header';
import { SEO } from '~/components/SEO';

type Props = {};

const DefaultLayout: React.FC<Props> = ({
  children,

  ...props
}) => {
  return (
    <div className="overflow-hidden" {...props}>
      <Header />
      <SEO />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
