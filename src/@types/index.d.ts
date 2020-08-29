import { FluidObject } from 'gatsby-image';

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export interface QueryItem {
  node: {
    excerpt: string;
    fields: {
      readingTime: {
        text: string;
        words: string;
      };
    };
    frontmatter: {
      /** The post date. */
      date: string;
      cover_image: {
        childImageSharp: {
          fluid: FluidObject;
        };
        /** Path to the cover image. */
        publicURL: string;
      };
      /** A list of tags for the article i.e. related topics. */
      tags: string[];
      /** The title of the blog post. */
      title: string;
      /** The unique slug/url of the blog post. */
      slug: string;
    };
  };
}

export interface PopularItem {
  node: {
    totalCount: number;
    path: string;
  };
}

export interface Tag {
  /** A name of the tag. */
  fieldValue: string;
}

declare module '*.svg';
declare module '*.jpg';
declare module '*.png';
