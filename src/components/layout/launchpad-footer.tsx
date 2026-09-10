import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import socialsData from "@/data/socials.json";
import { TrackedLink } from "@/components/ui/tracked-link";

export function LaunchpadFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-surface)] py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display font-bold text-2xl text-[var(--brand-primary)] mb-4">AURA</h2>
            <p className="text-[var(--text-secondary)] max-w-sm">
              Engineering Better Digital Experiences. A living product showcasing technical architecture, 
              product design, and engineering excellence.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">Labs</h3>
            <ul className="space-y-2">
              <li><Link href="/identity" className="text-[var(--text-muted)] hover:text-[var(--brand-primary)] transition-colors">Identity</Link></li>
              <li><Link href="/engineering" className="text-[var(--text-muted)] hover:text-[var(--brand-primary)] transition-colors">Engineering</Link></li>
              <li><Link href="/products" className="text-[var(--text-muted)] hover:text-[var(--brand-primary)] transition-colors">Products</Link></li>
              <li><Link href="/ai" className="text-[var(--text-muted)] hover:text-[var(--brand-primary)] transition-colors">AI</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">Connect</h3>
            <div className="flex space-x-4">
              <TrackedLink 
                href={socialsData.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                eventName="github_clicked"
                eventMetadata={{ source: "footer" }}
                className="text-[var(--text-muted)] hover:text-[var(--brand-primary)] transition-colors" 
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </TrackedLink>
              <TrackedLink 
                href={socialsData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                eventName="resume_clicked" // using existing event mapped for external profiles
                eventMetadata={{ source: "footer_linkedin" }}
                className="text-[var(--text-muted)] hover:text-[var(--brand-primary)] transition-colors" 
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </TrackedLink>
              <TrackedLink 
                href={`mailto:${socialsData.email}`} 
                eventName="resume_clicked"
                eventMetadata={{ source: "footer_email" }}
                className="text-[var(--text-muted)] hover:text-[var(--brand-primary)] transition-colors" 
                aria-label="Email"
              >
                <Mail size={20} />
              </TrackedLink>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[var(--border-color)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            © {currentYear} Aryan Dhandhukiya. All rights reserved.
          </p>
          <div className="text-sm text-[var(--text-muted)]">
            Powered by Next.js & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
