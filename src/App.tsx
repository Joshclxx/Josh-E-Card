import { Header } from "./components/Header";
import { ProfileCard } from "./components/ProfileCard";
import { ActionButtons } from "./components/ActionButtons";
import { SocialLinks } from "./components/SocialLinks";
import { ContactSection } from "./components/ContactCard";
import { ProjectCTA } from "./components/ProjectCTA";
import { profile } from "./profile";

export function App() {
  return (
    <div className="page-shell">
      <a href="#main" className="skip-link">
        Skip to business card
      </a>
      <Header />
      <main id="main" className="business-card grid" tabIndex={-1}>
        <section className="profile-section" aria-label="About Joshua">
          <ProfileCard />
          <ActionButtons />
          <div className="social-introduction">
            <SocialLinks />
            <p className="introduction">{profile.introduction}</p>
          </div>
        </section>
        <ContactSection />
        <ProjectCTA />
      </main>
    </div>
  );
}
