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
    id: "projects",
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


export const EMAIL = "Jesus_CR-90@hotmail.es"

export const PROJECT_CARD_MAX_WIDTH = 650;
export const PROJECT_CARD_MIN_WIDTH = PROJECT_CARD_MAX_WIDTH * 0.8;

export const SKILL_CARD_MAX_WIDTH = 400;
export const SKILL_CARD_MIN_WIDTH = SKILL_CARD_MAX_WIDTH * 0.8;

export const EXPERIENCE_CARD_MAX_WIDTH = 800;
export const EXPERIENCE_CARD_MIN_WIDTH = EXPERIENCE_CARD_MAX_WIDTH * 0.8;


export const COMMON_ICONS_URL = "https://raw.githubusercontent.com/JesusCRIS90/svg-icons-sprite-sheets/main/public/common-icons.svg"
export const SOCIAL_NETWORK_ICONS_URL = "https://raw.githubusercontent.com/JesusCRIS90/svg-icons-sprite-sheets/main/public/social-network-icons.svg"
export const TECH_ICONS_URL = "https://raw.githubusercontent.com/JesusCRIS90/svg-icons-sprite-sheets/main/public/tech-icons.svg"