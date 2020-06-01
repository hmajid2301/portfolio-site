import React from 'react';

interface Props {
  accent?: string;
  color?: string;
  hoverColor?: string;
  text: string;
  size?: string;
}

const Logo = ({
  accent = 'black',
  color = 'black',
  hoverColor = 'blue-500',
  text,
  size = '2xl',
}: Props) => (
  <div
    className={`cursor-pointer font-header font-black hover:text-${hoverColor} text-${color} text-${size} tracking-wide`}
  >
    <span className={`text-${accent}`} data-testid="OpeningTag">
      &lt;
    </span>
    {text}
    <span className={`text-${accent}`} data-testid="ClosingTag">
      /&gt;
    </span>
  </div>
);

export default Logo;
