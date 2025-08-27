// app/components/LazySection.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

type Loader<P extends Record<string, any> = {}> = () => Promise<{
  default: React.ComponentType<P>;
}>;

type LazySectionProps<P extends Record<string, any> = {}> = {
  loader: Loader<P>;
  props?: P;
  fallback?: React.ReactNode;

  prefetchMargin?: string;
  mountMargin?: string;

  idlePrefetch?: boolean;
  once?: boolean;

  className?: string;
};

const rqIdle = (cb: () => void) => {
  if (typeof (window as any).requestIdleCallback === "function") {
    (window as any).requestIdleCallback(cb);
  } else {
    setTimeout(cb, 1);
  }
};

export default function LazySection<P extends Record<string, any> = {}>({
  loader,
  props,
  fallback = null,
  prefetchMargin = "1200px 0px",
  mountMargin = "300px 0px",
  idlePrefetch = true,
  once = true,
  className,
}: LazySectionProps<P>) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const prefetchedRef = useRef<Promise<{
    default: React.ComponentType<P>;
  }> | null>(null);

  const [Comp, setComp] = useState<React.ComponentType<P> | null>(null);
  const [mounted, setMounted] = useState(false);

  // Idle prefetch
  useEffect(() => {
    if (!idlePrefetch) return;
    rqIdle(() => {
      if (!prefetchedRef.current) {
        prefetchedRef.current = loader();
      }
    });
  }, [idlePrefetch, loader]);

  // Prefetch when near viewport
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (!prefetchedRef.current) prefetchedRef.current = loader();
          if (once) io.disconnect();
        }
      },
      { root: null, rootMargin: prefetchMargin, threshold: 0.001 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [prefetchMargin, loader, once]);

  // Mount when close/visible
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      async (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setMounted(true);
          try {
            const mod = await (prefetchedRef.current ?? loader());
            setComp(() => mod.default);
          } catch (e) {
            console.error("LazySection load failed", e);
          }
          if (once) io.disconnect();
        } else if (!once) {
          setMounted(false);
        }
      },
      { root: null, rootMargin: mountMargin, threshold: 0.001 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [mountMargin, loader, once]);

  return (
    <div ref={wrapperRef} className={className}>
      {mounted && Comp ? React.createElement(Comp, props as P) : fallback}
    </div>
  );
}
