import React from 'react';

export interface Props {
  /** The colour of the opening and closing tags. */
  accent?: string;
  /** The colour of main text. */
  color?: string;
  /** The colour when you hover over the logo. */
  hoverColor?: string;
  /** The main text of the logo for example, your name. */
  text: string;
  /** The size of the main text  */
  size?: 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
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
