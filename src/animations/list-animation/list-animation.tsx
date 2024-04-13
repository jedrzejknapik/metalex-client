import { FC, PropsWithChildren } from 'react';

import { AnimatePresence } from 'framer-motion';

interface ListAnimationProps {
  className?: string;
}

export const ListAnimation: FC<PropsWithChildren<ListAnimationProps>> = ({
  children,
  className,
}) => {
  return (
    <ul className={className}>
      <AnimatePresence initial>{children}</AnimatePresence>
    </ul>
  );
};
