"use client";

import { useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

export type EventName = 
  | "page_view" 
  | "project_opened" 
  | "case_study_opened" 
  | "github_clicked" 
  | "resume_clicked" 
  | "theme_changed";

export function useAnalytics() {
  const pathname = usePathname();

  const trackEvent = useCallback((eventName: EventName, metadata?: Record<string, unknown>) => {
    // In MVP, we mock the analytics tracking by logging to the console.
    // In production, this would send a payload to Vercel Analytics, Google Analytics, or PostHog.
    console.log(`[Analytics Event]: ${eventName}`, metadata || {});
  }, []);

  // Automatically track page views on route changes
  useEffect(() => {
    if (pathname) {
      trackEvent("page_view", { path: pathname });
    }
  }, [pathname, trackEvent]);

  return { trackEvent };
}
