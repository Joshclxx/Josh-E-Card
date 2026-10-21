import {
  AtSign,
  ChevronRight,
  Mail,
  MessageCircle,
  Music2,
  Phone,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  contactHref,
  mobileDisplay,
  profile,
  viberDisplay,
  viberHref,
  whatsappHref,
} from "../profile";

interface ContactCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
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
      </span>
      <ChevronRight className="contact-chevron shrink-0" aria-hidden="true" />
    </>
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
      <h2 id="contact-heading" tabIndex={-1}>
        Connect with me
      </h2>
      <div className="contact-list grid">
        <ContactCard
          title="Email"
          description={profile.email}
          icon={Mail}
          href={contactHref}
        />
        <ContactCard
          title="WhatsApp"
          description={mobileDisplay}
          icon={MessageCircle}
          href={whatsappHref}
          external
        />
        <ContactCard
          title="Viber"
          description={viberDisplay}
          icon={Phone}
          href={viberHref}
        />
        <ContactCard
          title="Threads"
          description={profile.handles.threads}
          icon={AtSign}
          href={profile.destinations.threads}
          external
        />
        <ContactCard
          title="X"
          description={profile.handles.x}
          icon={X}
          href={profile.destinations.x}
          external
        />
        <ContactCard
          title="TikTok"
          description={profile.handles.tiktok}
          icon={Music2}
          href={profile.destinations.tiktok}
          external
        />
      </div>
    </section>
  );
}
