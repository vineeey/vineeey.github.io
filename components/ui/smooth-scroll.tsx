"use client";

import { useEffect } from "react";

import { initScrollAnimations } from "@/animations/scroll";
import { useLenis } from "@/hooks/use-lenis";

export function SmoothScrollEnhancer() {
  useLenis();

  useEffect(() => {
    initScrollAnimations();
  }, []);

  return null;
}
