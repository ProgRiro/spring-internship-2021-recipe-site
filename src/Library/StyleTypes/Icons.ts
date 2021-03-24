import {
  faMobileAlt,
  faSignInAlt,
  faBars,
  faSearch,
  faFolder,
  faAngleUp,
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export const Icons = {
  mobile: faMobileAlt,
  signin: faSignInAlt,
  bars: faBars,
  search: faSearch,
  folder: faFolder,
  angleUp: faAngleUp,
  angleDown: faAngleDown,
  angleLeft: faAngleLeft,
  angleRight: faAngleRight,
  star: faStar,
};
export type Icons = keyof typeof Icons;
