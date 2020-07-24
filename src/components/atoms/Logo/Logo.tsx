import React from 'react';
import tw from 'twin.macro';

export interface Props {
  /** The size of the main text  */
  size?: string;
}

const Logo = ({ size = '2xl' }: Props) => (
  <LogoContainer className={`hover:text-primary md:text-${size}`}>
    <Tag>&lt;</Tag>
    Haseeb
    <Tag>/&gt;</Tag>
  </LogoContainer>
);

const LogoContainer = tw.div`cursor-pointer font-header tracking-wide text-2xl font-bold`;

const Tag = tw.span`text-accent`;

export default Logo;
