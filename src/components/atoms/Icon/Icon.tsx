import React from 'react';

import {
  AiFillGithub as Github,
  AiFillGitlab as Gitlab,
  AiFillMediumCircle as Medium,
  AiOutlineCompass as Compass,
  AiOutlineStar as Star,
  AiOutlineTwitter as Twitter,
  AiFillLinkedin as LinkedIn,
} from 'react-icons/ai';
import {
  FaDev as Dev,
  FaSearch as Search,
  FaFacebookF as Facebook,
} from 'react-icons/fa';
import { GoKey as Key } from 'react-icons/go';
import { GrReddit as Reddit } from 'react-icons/gr';
import { RiCloseLine as Close, RiMenuLine as Menu } from 'react-icons/ri';

import tw from 'twin.macro';

export interface Props {
  /** The background of the icon. */
  background?: string;
  /** Extra classes to assign to this component. */
  className?: string;
  /** The data test id of the icon. */
  dataId?: string;
  /** The icon element as a string. */
  icon: string;
  /** The aria-label for this component. */
  label?: string;
  /** Function to call when the icon is pressed/clicked. */
  onClick?: () => void;
}

const Icon = ({
  background = 'transparent',
  className,
  dataId,
  icon,
  label,
  onClick,
}: Props) => {
  const icons: { [name: string]: JSX.Element } = {
    github: <Github />,
    gitlab: <Gitlab />,
    medium: <Medium />,
    compass: <Compass />,
    star: <Star />,
    twitter: <Twitter />,
    linkedin: <LinkedIn />,
    dev: <Dev />,
    search: <Search />,
    facebook: <Facebook />,
    key: <Key />,
    reddit: <Reddit />,
    close: <Close />,
    menu: <Menu />,
  };

  return (
    <IconContainer
      aria-label={label}
      className={`bg-${background} ${className}`}
      data-cy={dataId}
      onClick={onClick}
    >
      {icons[icon]}
    </IconContainer>
  );
};

const IconContainer = tw.button`h-full w-auto transition duration-300 inline-block text-header hover:text-primary`;

export default Icon;
