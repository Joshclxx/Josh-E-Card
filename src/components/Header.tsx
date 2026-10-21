import { fullName, profile } from "../profile";
import { ShareButton } from "./ShareButton";

export function Header() {
  return (
    <header className="page-header flex items-center justify-between">
      <div className="brand-logo">
        <img
          src={profile.logo}
          alt={`${fullName} — JC monogram`}
          width="6250"
          height="6250"
        />
      </div>
      <ShareButton />
    </header>
  );
}
