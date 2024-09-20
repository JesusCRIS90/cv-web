import { iKey } from './common-data.interface';

import { 
    iIcon, 
    iImage, 
    iText, 
    iLinkIcon, 
    iParagraph, 
    iProject, 
    iSkill, 
    iSummary
 } from "./common-data.interface"


// export interface iHome {
//     whoIam: iWhoIAm,
//     profileImg: iProfileImage
// }

export interface iWhoIAm {
    name: iText,
    role: iText,
    briefIntro: iText,
}

export interface iProfileImage {
    profileImage: iImage,
}

export interface iContact{
    linkIcons: iLinkIcon[],
    actionIcon: iIcon,
}

export interface iBio{
    bio: iParagraph[],
}

export interface iPortfolio{
    projects: iProject[],
}

export interface iSummaries {
    summaries: iSummary[],
}

export interface iSkills {
    skills: iSkill[],
}

export interface iExperience extends iKey{
    tag: string,
    startDate: string,
    endDate: string,
    business: string,
    role: string,
    description: iText,
    techStack: string[],
}

export interface iExperiences {
    experience: iExperience[],
}