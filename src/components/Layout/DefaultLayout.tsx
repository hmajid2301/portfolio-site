/* eslint-disable react/jsx-props-no-spreading */
import { css } from '@emotion/core';
import React from 'react';

type Props = {};

const DefaultLayout: React.FC<Props> = ({
  children,

  ...props
}) => {
  return (
    <>
      <div
        css={css`
          overflow: hidden;
        `}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default DefaultLayout;
