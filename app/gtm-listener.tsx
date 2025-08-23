// app/gtm-listener.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GTMListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    // send a virtual pageview to GA4 (via GTM) on every route change
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "pageview",
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}
