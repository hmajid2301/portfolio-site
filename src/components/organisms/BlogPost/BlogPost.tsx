import { FluidObject } from 'gatsby-image';
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import tw from 'twin.macro';
import 'prismjs/plugins/command-line/prism-command-line.css';
import 'gatsby-prismjs-dracula';
import 'react-toastify/dist/ReactToastify.css';
import 'remark-admonitions/styles/classic.css';

import '~/styles/blog.css';
import { PostMeta } from '~/components/molecules/PostMeta';
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
  /** The link to go to edit the page i.e. Gitlab. */
  editLink: string;
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
  editLink,
  readingTime,
  slug,
  tags,
  title,
  words,
}: Props) => {
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
      <PostMeta
        coverImage={coverImage}
        date={date}
        editLink={editLink}
        readingTime={readingTime}
        tags={tags}
        title={title}
        words={words}
      />
      <div className="blog-post">
        <div
          className="px-3 blog-post-content lg:px-10"
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
