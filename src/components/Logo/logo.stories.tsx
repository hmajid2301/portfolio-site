import React from 'react';

import Logo from './Logo';

export default {
  title: 'Logo',
};

export const SimpleLogo = () => <Logo />;
export const BlackGreyLogo = () => <Logo accent="gray-500" color="black" />;
export const BlueGreyLogo = () => <Logo accent="gray-700" color="blue-500" />;
export const LargerLogo = () => (
  <Logo accent="gray-700" color="blue-600" size="4xl" />
);
export const ExtraSmallLogo = () => (
  <Logo accent="gray-700" color="blue-600" size="xs" />
);
