export type NavLinkType = {
  id: number;
  label: string;
  link: string;
};

export const navlinks: NavLinkType[] = [
  {
    id: 1,
    label: "Accueil",
    link: "/",
  },
  {
    id: 2,
    label: "Blog",
    link: "/blog",
  },
];
