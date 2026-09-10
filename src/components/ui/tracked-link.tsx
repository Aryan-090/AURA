"use client";

import Link from "next/link";
import { useAnalytics, EventName } from "@/hooks/use-analytics";
import { ReactNode } from "react";

interface TrackedLinkProps {
  href: string;
  eventName: EventName;
  eventMetadata?: Record<string, unknown>;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function TrackedLink({ href, eventName, eventMetadata, children, ...props }: TrackedLinkProps) {
  const { trackEvent } = useAnalytics();

  const handleClick = () => {
    trackEvent(eventName, eventMetadata);
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
