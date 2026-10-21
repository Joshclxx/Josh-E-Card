export interface Profile {
  readonly firstName: string;
  readonly lastName: string;
  readonly role: string;
  readonly location: string;
  readonly email: string;
  readonly introduction: string;
  readonly portrait: string;
  readonly logo: string;
  readonly instagramHandle: string;
  readonly destinations: {
    readonly instagram: string;
    readonly linkedin: string | null;
    readonly facebook: string | null;
    readonly github: string | null;
    readonly portfolio: string | null;
  };
}

export const profile: Profile = {
  firstName: "Joshua",
  lastName: "Colobong",
  role: "Virtual Assistant & Software Developer",
  location: "Philippines",
  email: "joshuacolobong11@gmail.com",
  introduction:
    "Helping businesses with reliable virtual support and thoughtful digital solutions.",
  portrait: "/assets/joshua-portrait.png",
  logo: "/assets/josh-logo.png",
  instagramHandle: "@joshclxx",
  destinations: {
    instagram: "https://www.instagram.com/joshclxx/",
    linkedin: null,
    facebook: null,
    github: null,
    portfolio: null,
  },
};

export const fullName = `${profile.firstName} ${profile.lastName}`;
export const contactHref = `mailto:${profile.email}?subject=${encodeURIComponent("Let’s work together")}`;
