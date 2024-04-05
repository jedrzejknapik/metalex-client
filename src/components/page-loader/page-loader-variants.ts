import { Variants } from 'framer-motion';

import { ANIMATION_DURATION, ANIMATION_EASE } from '@utils/animations';

export const PAGE_LOADER_VARIANTS: Variants = {
  initial: {
    scaleX: 1,
  },
  animate: {
    scaleX: 0,
    transition: { duration: ANIMATION_DURATION, ease: ANIMATION_EASE },
  },
  exit: {
    scaleX: 1,
    transition: { duration: ANIMATION_DURATION, ease: ANIMATION_EASE },
  },
};
