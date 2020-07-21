import { Location } from '@reach/router';
import React from 'react';
import Helmet, { HelmetProps } from 'react-helmet';

type Props = {
  /** Description text for the description meta tags */
  description?: string;
} & HelmetProps;

/**
 * An SEO component that handles all element in the head that can accept
 */
const SEO: React.FC<Props> = ({ children, description = '', title }) => {
  const metaDescription = description || 'Welcome to my website';

  return (
    <Location>
      {({ location }) => (
        <Helmet
          htmlAttributes={{
            lang: 'en-uk',
          }}
          title={title}
          titleTemplate="%s | Website"
        >
          <meta content={metaDescription} property="description" />

          {/* OG tags */}
          <meta
            content={process.env.GATSBY_SITE_URL + location.pathname}
            property="og:url"
          />

          <link
            href="/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/favicons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />

          <meta content="website" property="og:type" />
          <meta content={title} property="og:title" />
          <meta content={metaDescription} property="og:description" />
          <meta content="en-uk" property="og:locale" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Muli&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@600,900&display=swap"
            rel="stylesheet"
          />

          {children}
        </Helmet>
      )}
    </Location>
  );
};

export default SEO;
