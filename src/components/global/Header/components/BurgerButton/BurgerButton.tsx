/* eslint-disable sonarjs/no-duplicate-string */
"use client";
import cn from "classnames";
import type { FC } from "react";
import { useCallback, useRef } from "react";

import styles from "./burger-button.module.scss";

type BurgerButtonProps = {
  onClick: () => void;
  isOpen: boolean;
  className?: string;
};

const BurgerButton: FC<BurgerButtonProps> = ({ onClick, isOpen, className = null }) => {
  const scrollHeight = useRef(0);

  const onClickCallback = useCallback(() => {
    if (isOpen) {
      window.scrollTo({ top: scrollHeight.current * -1 });
    } else {
      const { y } = document.body.getBoundingClientRect();
      scrollHeight.current = y;
    }
    onClick();
  }, [isOpen, onClick]);

  return (
    <button
      data-cy="burger-open"
      className={cn(
        styles.burgerButton,
        {
          [styles.open]: isOpen,
        },
        className
      )}
      onClick={onClickCallback}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
    >
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
    </button>
  );
};

export default BurgerButton;
