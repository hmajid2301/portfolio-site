import { QueryItem } from '~/@types/index';
import { BlogItem } from '~/components/molecules/BlogCard';

export interface Props {
  data: {
    allMarkdownRemark: {
      edges: QueryItem[];
    };
  };
}

export const queryToBlogItem = (data: { edges: QueryItem[] }) => {
  const blogItems: BlogItem[] = [];
  data.edges.forEach((element) => {
    const { frontmatter, excerpt, fields } = element.node;
    blogItems.push({
      description: excerpt,
      date: frontmatter.date,
      image: frontmatter.cover_image.childImageSharp.fluid,
      tags: frontmatter.tags,
      title: frontmatter.title,
      link: frontmatter.slug,
      readingTime: fields?.readingTime.text,
    });
  });

  return blogItems;
};
