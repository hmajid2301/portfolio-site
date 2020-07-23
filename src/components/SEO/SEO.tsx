import { Location } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Helmet, { HelmetProps } from 'react-helmet';

type Props = {
  /** Description text for the description meta tags */
  description?: string;
  keywords?: string[];
  image?: {
    src: string;
    height: number;
    width: number;
  };
  pathname?: string;
} & HelmetProps;

const SEO = ({
  description,
  keywords,
  image: metaImage,
  pathname,
  title,
}: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  );

  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaKeywords = keywords || site.siteMetadata.keywords;
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : null;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

  return (
    <Location>
      {({ location }) => (
        <Helmet
          htmlAttributes={{
            lang: 'en-uk',
          }}
          link={[
            {
              href: 'favicon.ico',
              rel: 'Icon',
            },
            {
              href: '/favicons/apple-touch-icon.png',
              rel: 'apple-touch-icon',
              sizes: '180x180',
            },
            {
              href: '/favicons/favicon-32x32.png',
              rel: 'icon',
              sizes: '32x32',
              type: 'image/png',
            },
            {
              href: '/favicons/favicon-16x16.png',
              rel: 'icon',
              sizes: '16x16',
              type: 'image/png',
            },
          ].concat(
            canonical
              ? [
                  {
                    rel: 'canonical',
                    href: canonical,
                  },
                ]
              : []
          )}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              name: 'keywords',
              content: metaKeywords.join(','),
            },
            {
              property: `og:title`,
              content: metaTitle,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              property: `og:url`,
              content: `${site.siteMetadata.siteUrl}/${location.pathname}`,
            },
            {
              name: `twitter:creator`,
              content: site.siteMetadata.author,
            },
            {
              name: `twitter:title`,
              content: metaTitle,
            },
            {
              name: `twitter:description`,
              content: metaDescription,
            },
          ].concat(
            metaImage
              ? [
                  {
                    property: 'image',
                    content: image,
                  },
                  {
                    property: 'og:image',
                    content: image,
                  },
                  {
                    property: 'og:image:width',
                    content: metaImage.width,
                  },
                  {
                    property: 'og:image:height',
                    content: metaImage.height,
                  },
                  {
                    property: 'twitter:image',
                    content: image,
                  },
                  {
                    name: 'twitter:card',
                    content: 'summary_large_image',
                  },
                ]
              : [
                  {
                    name: 'twitter:card',
                    content: 'summary',
                  },
                ]
          )}
          title={metaTitle}
          titleTemplate="%s | Haseeb Majid's Blog"
        >
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
        </Helmet>
      )}
    </Location>
  );
};

export default SEO;
