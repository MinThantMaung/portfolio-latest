// app/components/LazySection.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

type AnyProps = Record<string, unknown>;
type Loader<P extends AnyProps = Record<string, never>> = () => Promise<{
  default: React.ComponentType<P>;
}>;

type LazySectionProps<P extends AnyProps = Record<string, never>> = {
  loader: Loader<P>;
  props?: P;
  fallback?: React.ReactNode;

  prefetchMargin?: string;
  mountMargin?: string;

  idlePrefetch?: boolean;
  once?: boolean;

  className?: string;
};

// Minimal typings for requestIdleCallback (no `any`)
type IdleDeadline = { didTimeout: boolean; timeRemaining: () => number };
type RequestIdleCallback = (
  cb: (deadline: IdleDeadline) => void,
  opts?: { timeout: number }
) => number;

const rqIdle = (cb: () => void) => {
  if (typeof window !== "undefined" && "requestIdleCallback" in window) {
    // Narrow the window type just for this call
    (
      window as Window & { requestIdleCallback: RequestIdleCallback }
    ).requestIdleCallback(() => cb());
  } else {
    setTimeout(cb, 1);
  }
};

export default function LazySection<
  P extends AnyProps = Record<string, never>
>({
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
            // `e` is `unknown` (good); just log
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
