"use client";

import LazySection from "./lazySection";
import Skeleton from "../components/Skeleton";
import CertificationSkeleton from "../skeletons/certificationSkeleton";
import ProjectSkeleton from "../skeletons/projectSkeleton";
import ServiceSkeleton from "../skeletons/serviceSkeleton";
import ChangelogSkeleton from "../skeletons/changelogSkeleton";
import QuotesSkeleton from "../skeletons/quotesSkeleton";
import ContactSkeleton from "../skeletons/contactSkeleton";
import TimelineSkeleton from "../skeletons/TimelineSkeleton";

export default function SectionsClient() {
  return (
    <>
      <LazySection
        loader={() => import("../components/timeline")}
        fallback={<TimelineSkeleton />}
        prefetchMargin="1200px 0px"
        mountMargin="300px 0px"
        idlePrefetch
        once
      />
      <LazySection
        loader={() => import("../components/certification")}
        fallback={<CertificationSkeleton />}
        prefetchMargin="1200px 0px"
        mountMargin="300px 0px"
        idlePrefetch
        once
      />
      <LazySection
        loader={() => import("../components/project")}
        fallback={<ProjectSkeleton />}
        prefetchMargin="1200px 0px"
        mountMargin="300px 0px"
        idlePrefetch
        once
      />
      <LazySection
        loader={() => import("../components/service")}
        fallback={<ServiceSkeleton />}
        prefetchMargin="1200px 0px"
        mountMargin="300px 0px"
        idlePrefetch
        once
      />
      <LazySection
        loader={() => import("../components/changelog")}
        fallback={<ChangelogSkeleton />}
        prefetchMargin="1200px 0px"
        mountMargin="300px 0px"
        idlePrefetch
        once
      />
      <LazySection
        loader={() => import("../components/quotes")}
        fallback={<QuotesSkeleton />}
        prefetchMargin="1200px 0px"
        mountMargin="300px 0px"
        idlePrefetch
        once
      />
      <LazySection
        loader={() => import("../components/contact")}
        fallback={<ContactSkeleton />}
        prefetchMargin="1200px 0px"
        mountMargin="300px 0px"
        idlePrefetch
        once
      />
    </>
  );
}
