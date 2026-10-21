import { BriefcaseBusiness, ChevronRight, Instagram, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { contactHref, profile } from "../profile";

interface ContactCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string | null;
  external?: boolean;
}

export function ContactCard({
  title,
  description,
  icon: Icon,
  href,
  external,
}: ContactCardProps) {
  const contents = (
    <>
      <span className="contact-icon flex shrink-0 items-center justify-center">
        <Icon aria-hidden="true" />
      </span>
      <span className="contact-copy min-w-0">
        <span className="contact-title block">{title}</span>
        <span className="contact-description block">{description}</span>
        {!href && (
          <span className="unavailable-label block">Link not added yet</span>
        )}
      </span>
      <ChevronRight className="contact-chevron shrink-0" aria-hidden="true" />
    </>
  );
  if (!href)
    return (
      <div
        className="contact-card unavailable-card flex items-center"
        aria-label={`${title}: ${description}. Link not added yet.`}
      >
        {contents}
      </div>
    );
  return (
    <a
      className="contact-card flex items-center"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {contents}
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}

export function ContactSection() {
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Connect with me</h2>
      <div className="contact-list grid">
        <ContactCard
          title="Email"
          description={profile.email}
          icon={Mail}
          href={contactHref}
        />
        <ContactCard
          title="Portfolio"
          description="Explore my work"
          icon={BriefcaseBusiness}
          href={profile.destinations.portfolio}
          external
        />
        <ContactCard
          title="Instagram"
          description={profile.instagramHandle}
          icon={Instagram}
          href={profile.destinations.instagram}
          external
        />
      </div>
    </section>
  );
}
