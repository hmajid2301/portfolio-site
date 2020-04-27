/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { css } from '@emotion/core';

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
