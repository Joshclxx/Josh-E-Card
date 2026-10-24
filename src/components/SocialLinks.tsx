import { Mail } from "lucide-react";
import { contactHref, profile } from "../profile";
import { BrandIcon } from "./BrandIcon";
import type { Brand } from "./BrandIcon";

const socials: ReadonlyArray<{ brand: Brand | "email"; label: string }> = [
  { brand: "linkedin", label: "LinkedIn" },
  { brand: "instagram", label: "Instagram" },
  { brand: "facebook", label: "Facebook" },
  { brand: "email", label: "Email" },
  { brand: "github", label: "GitHub" },
];

export function SocialLinks() {
  return (
    <nav
      className="social-links flex items-center justify-between"
      aria-label="Social profiles and email"
    >
      {socials.map(({ brand, label }) => (
        <a
          key={brand}
          className="social-button round-button"
          href={brand === "email" ? contactHref : profile.destinations[brand]}
          target={brand === "email" ? undefined : "_blank"}
          rel={brand === "email" ? undefined : "noopener noreferrer"}
          aria-label={brand === "email" ? label : `${label} (opens in a new tab)`}
        >
          {brand === "email" ? (
            <Mail aria-hidden="true" />
          ) : (
            <BrandIcon brand={brand} />
          )}
        </a>
      ))}
    </nav>
  );
}
