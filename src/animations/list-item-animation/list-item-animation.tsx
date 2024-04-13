import { FC, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

interface ListItemAnimationProps {
  index: number;
  className?: string;
}

export const ListItemAnimation: FC<
  PropsWithChildren<ListItemAnimationProps>
> = ({ children, index, className }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={className}
    >
      {children}
    </motion.li>
  );
};
