import React, { useContext } from 'react';

import { SEO } from '~/components/atoms/SEO';
import { Footer } from '~/components/organisms/Footer';
import { Header } from '~/components/organisms/Header';
import config from '~/config';
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
  image: metaImage = { src: '/og-image.jpg' },
  ogType = 'website',
  pathname,
  title,
}: Props) => {
  const { theme } = useContext(ThemeContext);
  const links = [
    { name: '🏠️ Home', link: '/' },
    { name: '✍️ Blog', link: '/blog/' },
    { name: '🔖 Tags', link: '/tag/' },
    { name: '🧮️ Stats', link: '/stats/' },
    { name: '📋 Uses', link: '/uses/' },
  ];

  const { meta } = config;

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
      {children}
      <Footer links={links} socialButtons={meta.social} />
    </div>
  );
};

export default DefaultLayout;
