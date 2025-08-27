"use client";

import LazySection from "./lazySection";
import Skeleton from "./Skeleton";

export default function SectionsClient() {
  return (
    <>
      <LazySection
        loader={() => import("../components/timeline")}
        fallback={<Skeleton label="Timeline" />}
        prefetchMargin="1200px 0px"
        mountMargin="300px 0px"
        idlePrefetch
        once
      />
      <LazySection
        loader={() => import("../components/certification")}
        fallback={<Skeleton label="Certification" />}
        prefetchMargin="1200px 0px"
        mountMargin="300px 0px"
        idlePrefetch
        once
      />
      <LazySection
        loader={() => import("../components/project")}
        fallback={<Skeleton label="Projects" />}
        prefetchMargin="1200px 0px"
        mountMargin="300px 0px"
        idlePrefetch
        once
      />
      <LazySection
        loader={() => import("../components/service")}
        fallback={<Skeleton label="Services" />}
        prefetchMargin="1200px 0px"
        mountMargin="300px 0px"
        idlePrefetch
        once
      />
      <LazySection
        loader={() => import("../components/changelog")}
        fallback={<Skeleton label="Changelog" />}
        prefetchMargin="1200px 0px"
        mountMargin="300px 0px"
        idlePrefetch
        once
      />
      <LazySection
        loader={() => import("../components/quotes")}
        fallback={<Skeleton label="Quotes" />}
        prefetchMargin="1200px 0px"
        mountMargin="300px 0px"
        idlePrefetch
        once
      />
    </>
  );
}
