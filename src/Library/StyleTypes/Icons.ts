import {
  faMobileAlt,
  faSignInAlt,
  faBars,
  faSearch,
  faFolder,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export const Icons = {
  mobile: faMobileAlt,
  signin: faSignInAlt,
  bars: faBars,
  search: faSearch,
  folder: faFolder,
  angleLeft: faAngleLeft,
  angleRight: faAngleRight,
};
export type Icons = keyof typeof Icons;
