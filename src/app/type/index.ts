"use client";
import { ReactNode } from "react";

export type TimelineItem = {
  date: string;
  title: string;
  body: ReactNode;
  icon?: ReactNode;
};
