// src/app/components/skeleton.tsx
"use client";

import React from "react";
import { cn } from "@/app/lib/utils"; // if you use your cn helper

type SkeletonProps = {
  label?: string;
  className?: string;
};

export default function Skeleton({ label, className }: SkeletonProps) {
  return (
    <div
      className={cn("mx-4 md:mx-24 my-16 animate-pulse space-y-4", className)}
    >
      {/* heading placeholder */}
      <div className="h-6 w-40 rounded bg-neutral-200" />

      {/* body/content placeholder */}
      <div className="h-40 w-full rounded bg-neutral-100" />

      {label && <span className="sr-only">Loading {label}…</span>}
    </div>
  );
}
