import { ArrowRight, Lightbulb } from "lucide-react";

export function ProjectCTA() {
  return (
    <a className="project-cta flex items-center" href="#contact-heading">
      <span className="project-icon flex items-center justify-center">
        <Lightbulb aria-hidden="true" strokeWidth={1.5} />
      </span>
      <span className="project-copy min-w-0">
        <span className="project-heading block">Have a project in mind?</span>
        <span className="project-description block">Let’s work together</span>
      </span>
      <span className="project-arrow flex shrink-0 items-center justify-center">
        <ArrowRight aria-hidden="true" />
      </span>
    </a>
  );
}
