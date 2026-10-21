import { profile } from "../profile";
import { BrandIcon } from "./BrandIcon";
import type { Brand } from "./BrandIcon";

const socials: ReadonlyArray<{ brand: Brand; label: string }> = [
  { brand: "linkedin", label: "LinkedIn" },
  { brand: "instagram", label: "Instagram" },
  { brand: "facebook", label: "Facebook" },
  { brand: "github", label: "GitHub" },
];

export function SocialLinks() {
  return (
    <nav
      className="social-links flex items-center justify-between"
      aria-label="Social profiles"
    >
      {socials.map(({ brand, label }) => (
        <a
          key={brand}
          className="social-button round-button"
          href={profile.destinations[brand]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} (opens in a new tab)`}
        >
          <BrandIcon brand={brand} />
        </a>
      ))}
    </nav>
  );
}
