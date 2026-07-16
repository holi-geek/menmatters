import { useCallback, useEffect, useRef, useState } from "react";

interface UseSlideshowOptions {
  total: number;
  autoPlay?: boolean;
  interval?: number;
}

export function useSlideshow({ total, autoPlay = true, interval = 5000 }: UseSlideshowOptions) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
  const goTo = useCallback((i: number) => setIndex(((i % total) + total) % total), [total]);

  useEffect(() => {
    if (!autoPlay || paused || total <= 1) return;
    timerRef.current = window.setTimeout(next, interval);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index, paused, autoPlay, interval, next, total]);

  return { index, next, prev, goTo, setPaused };
}
