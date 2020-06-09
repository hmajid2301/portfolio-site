import { useState } from 'react';
import { useAnimation, useCycle } from 'framer-motion';

export default function useAnimatedNavToggler() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [x, cycleX] = useCycle('0%', '150%');
  const animation = useAnimation();

  const toggleNavbar = () => {
    setShowNavLinks(!showNavLinks);
    animation.start({ x, display: 'block' });
    cycleX();
  };

  return { showNavLinks, animation, toggleNavbar };
}
