"use client";

import { useCallback, useEffect, useState, useTransition } from "react";

export const useHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isPending] = useTransition();

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    closeMenu();
    if (window) {
      window.addEventListener("resize", () => {
        closeMenu();
      });
    }
  }, [isPending]);

  return { isMobileMenuOpen, toggleMenu };
};
