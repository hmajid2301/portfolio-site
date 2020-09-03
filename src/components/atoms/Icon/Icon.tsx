import React from 'react';

import {
  AiFillGithub as Github,
  AiFillGitlab as Gitlab,
  AiFillMediumCircle as Medium,
  AiOutlineCompass as Compass,
  AiOutlineStar as Star,
  AiOutlineTwitter as Twitter,
  AiFillLinkedin as LinkedIn,
  AiOutlineWhatsApp as Whatsapp,
  AiFillEdit as Edit,
} from 'react-icons/ai';
import {
  FaDev as Dev,
  FaSearch as Search,
  FaFacebookF as Facebook,
  FaCalendarAlt as Calendar,
  FaChevronCircleUp as ChevronCircleUp,
  FaCode as Code,
  FaTags as Tag,
  FaHourglassEnd as HourGlass,
  FaGetPocket as Pocket,
} from 'react-icons/fa';
import { GoKey as Key } from 'react-icons/go';
import { GrReddit as Reddit } from 'react-icons/gr';
import { MdDescription as Description } from 'react-icons/md';
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
  label: string;
  /** Function to call when the icon is pressed/clicked. */
  onClick?: () => void;
  /** The size of the icon. */
  size?: string;
}

const icons: { [name: string]: JSX.Element } = {
  up: <ChevronCircleUp />,
  code: <Code />,
  description: <Description />,
  tag: <Tag />,
  github: <Github />,
  gitlab: <Gitlab />,
  calendar: <Calendar />,
  medium: <Medium />,
  compass: <Compass />,
  star: <Star />,
  hourglass: <HourGlass />,
  twitter: <Twitter />,
  linkedin: <LinkedIn />,
  dev: <Dev />,
  search: <Search />,
  facebook: <Facebook />,
  key: <Key />,
  reddit: <Reddit />,
  close: <Close />,
  menu: <Menu />,
  edit: <Edit />,
  whatsapp: <Whatsapp />,
  pocket: <Pocket />,
};

const Icon = ({
  background = 'transparent',
  className,
  dataId,
  icon,
  label,
  onClick,
  size = '1em',
}: Props) => {
  return (
    <IconContainer
      aria-label={label}
      className={`bg-${background} ${className}`}
      data-cy={dataId}
      data-testid={dataId}
      onClick={onClick}
    >
      {React.cloneElement(icons[icon], { size })}
    </IconContainer>
  );
};

const IconContainer = tw.button`h-full w-auto transition duration-300 inline-block text-header hover:text-primary`;

export default Icon;
