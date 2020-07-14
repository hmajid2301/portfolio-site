import React from 'react';
import tw from 'twin.macro';
import 'prismjs/themes/prism-okaidia.css';

import { PostMeta } from '~/components/molecules/PostMeta';
import '~/styles/blog.css';

export interface Props {
  /** The blog post as a HTML string. */
  data: string;
  /** The date of the blog post. */
  date: string;
  /** A list of tags for the article i.e. related topics. */
  tags: string[];
  /** The title of the blog post. */
  title: string;
  /** The unique slug/url of the blog post. */
  slug: string;
}

const BlogPost = ({ data, date, tags, title, slug }: Props) => {
  return (
    <BlogContainer className="blog-post-container">
      <PostMeta date={date} tags={tags} title={title} url={slug} />
      <div className="blog-post">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data }}
        />
      </div>
    </BlogContainer>
  );
};

const BlogContainer = tw.div`max-w-screen-lg mx-auto font-body`;

export default BlogPost;
