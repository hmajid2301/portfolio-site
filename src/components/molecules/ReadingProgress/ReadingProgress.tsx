import React, { useState, useEffect } from 'react';

import { Progress } from '~/components/atoms/Progress';

export interface Props {
  /** The ref to use to update the progress bar when scrolling, such as a blog post. */
  target: React.RefObject<HTMLElement>;
}

const ReadingProgress = ({ target }: Props) => {
  const [progress, setProgress] = useState(0);

  const scrollListener = () => {
    const element = target.current;
    if (!element) return;

    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (windowScrollTop === 0) {
      setProgress(0);
    } else if (windowScrollTop > totalHeight) {
      setProgress(100);
    } else {
      setProgress((windowScrollTop / totalHeight) * 100);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  });

  return <Progress className="fixed" width={progress} />;
};

export default ReadingProgress;
