import React from 'react';
import tw from 'twin.macro';

export interface Props {
  /** The text of the logo. */
  text: string;
  /** The size of the main text  */
  size?: string;
}

const Logo = ({ text, size = '2xl' }: Props) => (
  <LogoContainer className={`md:text-${size}`}>
    <Tag>&lt;</Tag>
    {text}
    <Tag>/&gt;</Tag>
  </LogoContainer>
);

const LogoContainer = tw.div` hover:text-primary cursor-pointer font-header tracking-wide text-2xl font-bold`;

const Tag = tw.span`text-accent`;

export default Logo;
