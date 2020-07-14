/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { SEO } from '~/components/SEO';

type Props = {};

const DefaultLayout: React.FC<Props> = ({
  children,

  ...props
}) => {
  return (
    <div className="overflow-hidden" {...props}>
      <SEO />
      {children}
    </div>
  );
};

export default DefaultLayout;
