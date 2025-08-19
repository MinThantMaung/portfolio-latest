"use client";

import React, { useEffect, useState } from "react";
import createDOMPurify from "dompurify";

type Props = { content: string; className?: string };

export default function RichTextRenderer({ content, className }: Props) {
  const [safeHtml, setSafeHtml] = useState<string>("");

  useEffect(() => {
    const DOMPurify = createDOMPurify(window);
    setSafeHtml(DOMPurify.sanitize(content) as string);
  }, [content]);

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: safeHtml }} />
  );
}
