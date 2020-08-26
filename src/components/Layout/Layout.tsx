import React, { useContext } from 'react';

import SEO from './SEO';

import { Footer } from '~/components/organisms/Footer';
import { Header } from '~/components/organisms/Header';
import config from '~/config/config.json';
import { ThemeContext } from '~/providers/Theme';

interface Props {
  children: React.ReactNode;
  description?: string;
  keywords?: string[];
  image?: {
    src: string;
    height?: number;
    width?: number;
  };
  ogType?: string;
  pathname?: string;
  title?: string;
}

const DefaultLayout = ({
  children,
  description,
  keywords,
  image: metaImage = { src: '/og-image.jpg', height: 630, width: 1200 },
  ogType = 'website',
  pathname,
  title,
}: Props) => {
  const { theme } = useContext(ThemeContext);
  const links = [
    { name: '🏠️ Home', link: '/' },
    { name: '✍️ Blog', link: '/blog/' },
    { name: '🧮️ Stats', link: '/stats/' },
    { name: '📋 Uses', link: '/uses/' },
  ];

  const { social } = config;

  return (
    <div
      className={`${
        theme === 'light' ? 'theme-light' : 'theme-dark'
      } bg-background`}
    >
      <Header links={links} />
      <SEO
        description={description}
        image={metaImage}
        keywords={keywords}
        ogType={ogType}
        pathname={pathname}
        title={title}
      />
      <main>{children}</main>
      <Footer links={links} socialButtons={social} />
    </div>
  );
};

export default DefaultLayout;
