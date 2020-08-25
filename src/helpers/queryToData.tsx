import { QueryItem, PopularItem } from '~/@types/index';
import { BlogItem } from '~/components/molecules/BlogCard';

export interface Props {
  data: {
    allMarkdownRemark: {
      edges: QueryItem[];
    };
  };
}

export const queryToBlogItem = (articles: { edges: QueryItem[] }) => {
  const blogItems: BlogItem[] = [];
  articles.edges.forEach((article) => {
    const { frontmatter, excerpt, fields } = article.node;
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

export const popularPostsToBlogItem = (
  articles: { edges: QueryItem[] },
  popular: {
    edges: PopularItem[];
  }
) => {
  const blogItems: BlogItem[] = [];
  const blogData: { [key: string]: BlogItem } = {};

  articles.edges.forEach((article) => {
    const { frontmatter, excerpt, fields } = article.node;
    blogData[frontmatter.slug] = {
      description: excerpt,
      date: frontmatter.date,
      image: frontmatter.cover_image.childImageSharp.fluid,
      tags: frontmatter.tags,
      title: frontmatter.title,
      link: frontmatter.slug,
      readingTime: fields?.readingTime.text,
    };
  });

  popular.edges.forEach((item) => {
    const slug = item.node.path.replace('/blog/', '');
    const matchingBlogPost = blogData[slug];
    blogItems.push(matchingBlogPost);
  });

  return blogItems;
};
