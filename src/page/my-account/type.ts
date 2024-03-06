export type Nav = {
  name: string;
  icon: string;
  component: string;
};

export type SideNavType = {
  nav: Nav[];
  setComponent: (component: string) => void;
};
