
import { iContact, iIcon, iImage, iLinkIcon, iProfileImage, iText, iWhoIAm } from "../interfaces"

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
        } ));
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

    return dataAdapted
}