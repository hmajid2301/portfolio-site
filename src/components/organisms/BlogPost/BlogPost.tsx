import { FluidObject } from 'gatsby-image';
import React, { useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import tw from 'twin.macro';
import 'gatsby-prismjs-dracula';
import 'react-toastify/dist/ReactToastify.css';

import '~/styles/blog.css';
import { PostMeta } from '~/components/molecules/PostMeta';
import { ReadingProgress } from '~/components/molecules/ReadingProgress';
import ScrollButton from '~/components/molecules/ScrollButton/ScrollButton';
import { ShareButtons } from '~/components/molecules/ShareButtons';
import copyToClipboard from '~/utils/copyToClipboard';

export interface Props {
  /** Cover Image for the article. */
  coverImage?: FluidObject;
  /** The blog post as a HTML string. */
  data: string;
  /** The date of the blog post. */
  date: string;
  /** How long it'll take to finish the article. */
  readingTime: string;
  /** The unique slug/url of the blog post. */
  slug: string;
  /** A list of tags for the article i.e. related topics. */
  tags: string[];
  /** The title of the blog post. */
  title: string;
  /** The number of words in the article. */
  words?: string;
}

const BlogPost = ({
  coverImage,
  data,
  date,
  readingTime,
  slug,
  tags,
  title,
  words,
}: Props) => {
  const target = useRef<HTMLDivElement>(null);

  function copyText(element: HTMLPreElement) {
    if (
      typeof element.className === 'string' &&
      element.className.startsWith('language-')
    ) {
      const codeText = element.innerText;
      copyToClipboard(codeText);
      toast.dark('Copied to clipboard 📒.');
      toast.clearWaitingQueue();
    }
  }

  useEffect(() => {
    window.addEventListener('click', (event) =>
      copyText(event?.target as HTMLPreElement)
    );
    return () =>
      window.removeEventListener('click', (event) =>
        copyText(event?.target as HTMLPreElement)
      );
  });

  return (
    <BlogContainer className="blog-post-container">
      <ReadingProgress target={target} />
      <PostMeta
        coverImage={coverImage}
        date={date}
        readingTime={readingTime}
        tags={tags}
        title={title}
        words={words}
      />
      <div ref={target} className="blog-post">
        <div
          className="blog-post-content px-3 lg:px-10"
          dangerouslySetInnerHTML={{ __html: data }}
        />
        <div className="flex justify-center align-center">
          <ShareButtons link={slug} />
        </div>
      </div>
      <ToastContainer
        autoClose={2000}
        closeOnClick
        draggable
        hideProgressBar
        limit={1}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position="bottom-center"
        rtl={false}
      />
      <ScrollButton anchor="#root" />
    </BlogContainer>
  );
};

const BlogContainer = tw.div`font-body text-main`;

export default BlogPost;
