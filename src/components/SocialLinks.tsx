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
      {socials.map(({ brand, label }) => {
        const url = profile.destinations[brand];
        return url ? (
          <a
            key={brand}
            className="social-button round-button"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (opens in a new tab)`}
          >
            <BrandIcon brand={brand} />
          </a>
        ) : (
          <span key={brand} className="unavailable-social">
            <button
              className="social-button round-button"
              aria-disabled="true"
              aria-label={`${label} — profile not added yet`}
              aria-describedby={`${brand}-unavailable`}
            >
              <BrandIcon brand={brand} />
              <span className="unavailable-indicator" aria-hidden="true">
                −
              </span>
            </button>
            <span
              className="social-tooltip"
              id={`${brand}-unavailable`}
              role="tooltip"
            >
              {label} link not added yet
            </span>
          </span>
        );
      })}
    </nav>
  );
}
