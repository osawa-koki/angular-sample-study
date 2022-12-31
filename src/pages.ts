
import setting from "./setting";

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
];

const pages = _pages.map((page) => {
  return {
    ...page,
    path: `${setting.subdir}${page.path}`,
  };
});

export default pages;
