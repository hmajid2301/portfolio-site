import scrollTo from 'gatsby-plugin-smoothscroll';
import React from 'react';

import { Icon } from '~/components/atoms/Icon';

export default function ScrollButton({ anchor }: { anchor: string }) {
  return (
    <div className="fixed right-0 bottom-0">
      <Icon icon="up" onClick={() => scrollTo(anchor)} size="3em" />
    </div>
  );
}
