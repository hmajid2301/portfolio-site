/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';

import { Footer } from '~/components/organisms/Footer';
import { Header } from '~/components/organisms/Header';
import { SEO } from '~/components/SEO';
import { ThemeContext } from '~/providers/Theme';

type Props = {};

const DefaultLayout: React.FC<Props> = ({
  children,

  ...props
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`overflow-hidden ${
        theme === 'light' ? 'theme-light' : 'theme-dark'
      } bg-background`}
      {...props}
    >
      <Header />
      <SEO />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
