export interface Profile {
  readonly firstName: string;
  readonly lastName: string;
  readonly role: string;
  readonly location: string;
  readonly email: string;
  readonly mobile: string;
  readonly viber: string;
  readonly introduction: string;
  readonly portrait: string;
  readonly logo: string;
  readonly handles: {
    readonly threads: string;
    readonly x: string;
    readonly tiktok: string;
  };
  readonly destinations: {
    readonly instagram: string;
    readonly linkedin: string;
    readonly facebook: string;
    readonly github: string;
    readonly threads: string;
    readonly x: string;
    readonly tiktok: string;
  };
}

export const profile: Profile = {
  firstName: "Joshua",
  lastName: "Colobong",
  role: "Virtual Assistant & Software Developer",
  location: "Philippines",
  email: "joshuacolobong11@gmail.com",
  mobile: "+639924038038",
  viber: "+639381712437",
  introduction:
    "Helping businesses with reliable virtual support and thoughtful digital solutions.",
  portrait: "/assets/joshua-portrait.png",
  logo: "/assets/josh-logo.png",
  handles: {
    threads: "@_joshclxx",
    x: "@_jshclxx",
    tiktok: "@joshclxx",
  },
  destinations: {
    instagram: "https://www.instagram.com/_joshclxx/",
    linkedin: "https://www.linkedin.com/in/joshclxx/",
    facebook: "https://www.facebook.com/joshclxx/",
    github: "https://github.com/Joshclxx",
    threads: "https://www.threads.com/@_joshclxx",
    x: "https://x.com/_jshclxx",
    tiktok: "https://www.tiktok.com/@joshclxx",
  },
};

export const fullName = `${profile.firstName} ${profile.lastName}`;
export const contactHref = `mailto:${profile.email}?subject=${encodeURIComponent("Let’s work together")}`;
export const callHref = `tel:${profile.mobile}`;
export const whatsappHref = `https://wa.me/${profile.mobile.replace(/^\+/, "")}`;
export const viberHref = `viber://chat?number=${encodeURIComponent(profile.viber)}`;
export const mobileDisplay = profile.mobile.replace(/^\+63/, "0");
export const viberDisplay = profile.viber.replace(/^\+63/, "0");
