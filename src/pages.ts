
type Page = {
  name: string;
  path: string;
};

const _pages: Page[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Form",
    path: "/form",
  },
];

const pages = _pages.map((page) => {
  return {
    ...page,
    path: `${page.path}`,
  };
});

export default pages;
