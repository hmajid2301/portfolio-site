import React from 'react';
import tw from 'twin.macro';

export interface Props {
  /** Extra classnames to apply to component. */
  className?: string;
  /** Width of the progress bar. */
  width: number;
}

const Progress = ({ className, width = 20 }: Props) => (
  <ProgressBar
    aria-hidden="true"
    className={`${className}`}
    data-testid="Progress"
    style={{ width: `${width}%` }}
  />
);

const ProgressBar = tw.progress`h-1 z-10 top-0 left-0 bg-primary`;

export default Progress;
