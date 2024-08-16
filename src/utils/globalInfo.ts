export interface ISection {
  id: string;
  sectionName: string;
  icon: string;
  isActive: boolean;
}

export const sections: ISection[] = [
  { id: "home", sectionName: "", icon: "fa-solid fa-house", isActive: true },
  {
    id: "about",
    sectionName: "About Me",
    icon: "fa-solid fa-user",
    isActive: false,
  },
  {
    id: "portfolio",
    sectionName: "Projects",
    icon: "fa-solid fa-briefcase",
    isActive: false,
  },
  // {
  //   id: "testing",
  //   sectionName: "Testing Components",
  //   icon: "fa-solid fa-gear",
  //   isActive: false,
  // },
];


export const SVG_URL = "https://raw.githubusercontent.com/JesusCRIS90/svg-icons-sprite-sheets/gh-pages/bw_logos.svg"