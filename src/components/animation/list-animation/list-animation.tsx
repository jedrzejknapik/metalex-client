import { FC, PropsWithChildren } from "react";
import cn from "classnames";
import { motion } from "framer-motion";

import { INITIAL_ANIMATION } from "./variants";

import styles from "./list-animation.module.scss";

interface ListAnimationProps {
  containerClassName?: string;
}

export const ListAnimation: FC<PropsWithChildren<ListAnimationProps>> = ({
  children,
  containerClassName,
}) => {
  return (
    <motion.ul
      className={cn(styles.list, containerClassName)}
      initial={INITIAL_ANIMATION}
    >
      {children}
    </motion.ul>
  );
};
