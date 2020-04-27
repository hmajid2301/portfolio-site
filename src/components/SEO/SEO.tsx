import React from 'react';
import Helmet, { HelmetProps } from 'react-helmet';
import { Location } from '@reach/router';

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
          <meta property="description" content={metaDescription} />

          {/* OG tags */}
          <meta
            property="og:url"
            content={process.env.GATSBY_SITE_URL + location.pathname}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:locale" content="en-uk" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Muli&display=swap"
            rel="stylesheet"
          />

          {children}
        </Helmet>
      )}
    </Location>
  );
};

export default SEO;
