
import { iBio, iContact, iExperience, iExperiences, iIcon, iImage, iLinkIcon, iParagraph, iPortfolio, iProfileImage, iProject, iSkill, iSkills, iSummaries, iSummary, iText, iWhoIAm } from "../interfaces"

export const WhoIamAdaptor = (data: any): iWhoIAm => {

    let dataAdapted = {} as iWhoIAm;

    // Adaptation Data
    const Name: iText = {
        text: (data?.Name?.text === undefined) ? "" : data.Name.text,
        keyword: (data?.Name?.keywords === undefined) ? [] : data.Name.keywords,
        key: data?.Name?.key,
    }

    const Role: iText = {
        text: (data?.Role?.text === undefined) ? "" : data.Role.text,
        keyword: (data?.Role?.keywords === undefined) ? [] : data.Role.keywords,
        key: data?.Role?.key,
    }

    const BriefIntro: iText = {
        text: (data?.BriefIntro?.text === undefined) ? "" : data.BriefIntro.text,
        keyword: (data?.BriefIntro?.keywords === undefined) ? [] : data.BriefIntro.keywords,
        key: data?.BriefIntro?.key,
    }

    // Setting Adapted Data
    dataAdapted = {
        name: Name,
        role: Role,
        briefIntro: BriefIntro,
    }

    return dataAdapted
}

export const ProfileImageAdaptor = (data: any): iProfileImage => {

    let dataAdapted = {} as iProfileImage;

    // Adaptation Data
    const image: iImage = {
        src: (data === undefined) ? undefined : data,
        id: data?.id,
        key: data?.key,
    }

    // Setting Adapted Data
    dataAdapted = {
        profileImage: image
    }

    return dataAdapted;
}

export const ContactAdaptor = (data: any): iContact => {

    let dataAdapted = {} as iContact;

    // Adaptation Data
    let linkIcons: iLinkIcon[] = [];

    // Check if linkIcons exist and adapt the data
    if (data?.linkIcons) {
        linkIcons = data.linkIcons.map((linkIcon: any) => ({
            name: linkIcon?.iconName || "", // Assign the iconName to name (matches iLinkIcon)
            link: linkIcon?.link || "",     // Assign link from the JSON
            key: linkIcon?.iconName,
        }));
    }

    // Adapt actionIcon
    let actionIcon: iIcon = {
        name: data?.actionIcon?.iconName || "", // Assign the iconName to name (matches iIcon)
        tooltip: data?.actionIcon?.action || "", // Assign action to tooltip or use it for another field if needed
    };


    // Setting Adapted Data
    dataAdapted = {
        linkIcons,
        actionIcon,
    };

    return dataAdapted;
}

export const BriefBioAdaptor = (data: any): iBio => {

    let dataAdapted = {} as iBio;

    // Adaptation Data
    let bioParagraphs: iParagraph[] = [];

    if (data !== undefined) {
        bioParagraphs = data.map((bioParagraph: iParagraph) => ({
            text: bioParagraph.text || "", // Assign the iconName to name (matches iLinkIcon)
            key: bioParagraph?.key || undefined,
        }));
    }
    
    dataAdapted.bio = bioParagraphs;

    return dataAdapted;
}

export const SummaryAdaptor = (data: any): iSummaries => {

    let dataAdapted = {} as iSummaries;

    // Adaptation Data
    let summaries: iSummary[] = [];

    if (data !== undefined) {
        summaries = data.map((summary: any) => ({
            mainText: summary.mainText || "", // Assign the iconName to name (matches iLinkIcon)
            secText: summary.secondaryText || "",
            secNumber: summary.secondaryNumber !== undefined ? summary.secondaryNumber : undefined,
            icons: summary?.icons.map((icon: any): iIcon => ({
                name: icon.iconName || "",
                tooltip: icon?.tooltip || undefined,
                key: icon?.tooltip || undefined,
            })),
            key: summary?.key || undefined,
        }));
    }

    dataAdapted.summaries = summaries;

    return dataAdapted;
}

export const ExperienceAdaptor = (data: any): iExperiences => {

    let dataAdapted = {} as iExperiences;

    // Adaptation Data
    let experiencelist: iExperience[] = [];

    if (data !== undefined) {
        experiencelist = data.map((experience: any): iExperience => ({
            tag: experience.tag || "",
            startDate: experience.startDate || "",
            endDate: experience.endDate || "",
            business: experience.business || "",
            description: experience.description || "",
            role: experience.role || "",
            techStack: experience?.techStack || [],
            key: experience?.key || undefined,
        }));
    }

    dataAdapted.experience = experiencelist;

    return dataAdapted;
}

export const SkillsAdaptor = (data: any): iSkills => {

    let dataAdapted = {} as iSkills;

    // Adaptation Data
    let skills: iSkill[] = [];

    if (data !== undefined) {
        skills = data.map((skill: any): iSkill => ({
            name: skill.skillName || "",
            description: skill.skillDescription || "",
            tag: skill.tag || "",
            image: {
                src: skill.image.src || "",
                id: skill.skillName || "",
            },
            key: skill?.skillName || undefined,
        }));
    }

    dataAdapted.skills = skills;

    return dataAdapted;
}

export const PortfolioAdaptor = (data: any): iPortfolio => {

    let dataAdapted = {} as iPortfolio;

    // Adaptation Data
    let projects: iProject[] = [];

    if (data !== undefined) {
        projects = data.map((project: any): iProject => ({
            tittle: project.tittle || "",
            description: {
                text: project.description || "",
            },
            image: {
                src: project.image || "",
                id: project.key || "",
            },
            techStack: project?.techStack.map((icon: any): iIcon => ({
                name: icon.iconName || "",
                tooltip: icon?.tooltip || undefined,
                key: icon?.tooltip || "",
            })),
            links: project?.links.map( (link: any): iLinkIcon => ({
                link: link.link || "",
                name: link.iconName || "",
                key: link.iconName || "",
                tooltip: ""
            }) ),
            key: project?.key || undefined,
        }));
    }

    dataAdapted.projects = projects;

    return dataAdapted;
}