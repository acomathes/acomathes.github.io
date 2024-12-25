import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://acomathes.github.io/",
  author: "Ahmet Polat",
  desc: "Personal blog for acomathes' excitement about tech, art and philosophy topics.",
  title: "acomathes Blog",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/acomathes",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmet-polat-profile/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:polat2000@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/acomathes",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];
