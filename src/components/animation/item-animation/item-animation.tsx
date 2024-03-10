import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface ItemAnimationProps {
  delay?: number;
  className?: string;
}

export const ItemAnimation: FC<PropsWithChildren<ItemAnimationProps>> = ({
  children,
  className,
  delay = 0.1,
}) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.li>
  );
};
