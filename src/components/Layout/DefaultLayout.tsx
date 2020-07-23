import React, { useContext } from 'react';

import { Footer } from '~/components/organisms/Footer';
import { Header } from '~/components/organisms/Header';
import { SEO } from '~/components/SEO';
import { ThemeContext } from '~/providers/Theme';

interface Props {
  children: React.ReactNode;
  description?: string;
  keywords?: string[];
  image?: {
    src: string;
    height: number;
    width: number;
  };
  pathname?: string;
  title?: string;
}

const DefaultLayout = ({
  children,
  description,
  keywords,
  image: metaImage,
  pathname,
  title,
}: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`overflow-hidden ${
        theme === 'light' ? 'theme-light' : 'theme-dark'
      } bg-background`}
    >
      <Header />
      <SEO
        description={description}
        image={metaImage}
        keywords={keywords}
        pathname={pathname}
        title={title}
      />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
