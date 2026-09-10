import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuraNavigation } from "@/components/navigation/aura-navigation";
import { LaunchpadFooter } from "@/components/layout/launchpad-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "AURA | Engineering Better Digital Experiences",
  description: "A digital engineering experience platform by Aryan Dhandhukiya.",
};

import { AnalyticsWrapper } from "@/components/analytics-wrapper";
import { PageTransition } from "@/components/motion/page-transition";
import { Atmosphere } from "@/components/layout/atmosphere";
import { AuraLoadingSequence } from "@/components/ui/aura-loading-sequence";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AuraLoadingSequence />
          <Atmosphere />
          <AnalyticsWrapper />
          <AuraNavigation />
          <main className="flex-grow flex flex-col z-0">
            <PageTransition>{children}</PageTransition>
          </main>
          <LaunchpadFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
