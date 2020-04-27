import React from 'react';

interface Props {
  accent?: string;
  color?: string;
  size?: string;
}

const Logo = ({ accent = 'black', color = 'black', size = 'sm' }: Props) => (
  <div className={`text-${color} text-${size} font-header`}>
    <span className={`text-${accent}`} data-testid="OpeningTag">
      &lt;
    </span>
    Haseeb
    <span className={`text-${accent}`} data-testid="ClosingTag">
      /&gt;
    </span>
  </div>
);

export default Logo;
