import { Link, graphql } from 'gatsby';
import React from 'react';

export interface Props {
  data: {
    allMarkdownRemark: {
      group: Tag[];
    };
  };
}

export interface Tag {
  fieldValue: string;
  totalCount: number;
}

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}: Props) => (
  <div>
    <div>
      <h1>Tags</h1>
      <ul>
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
