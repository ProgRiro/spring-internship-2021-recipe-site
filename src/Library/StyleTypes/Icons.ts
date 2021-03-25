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
  faFile,
  faCopy,
  faTrash,
  faPen,
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
  file: faFile,
  copy: faCopy,
  trash: faTrash,
  pen: faPen,
};
export type Icons = keyof typeof Icons;
