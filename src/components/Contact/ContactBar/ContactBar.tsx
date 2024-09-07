import React from 'react'

import { IconLink } from "../../../components"
import { HorizontalLayout } from "../../Layouts"

import styles from "./ContactBar.module.css"

interface ActionIcons {
    iconName: string;
    action: string;
}

interface LinkIcon {
    iconName: string;
    link: string;
}

interface BaseProps extends React.PropsWithChildren {
    actionIcons?: ActionIcons[];
    linkIcons?: LinkIcon[];
}

export interface ContactProps extends BaseProps {
    contact?: BaseProps;
}


const ContactBar: React.FC<ContactProps> = ({
    linkIcons,
    actionIcons,
    contact
}) => {

    const {
        linkIcons: contactLinkIcons = linkIcons || [],
        actionIcons: contactActionIcons = actionIcons || [],
    } = contact || {};

    // const mergedLinkIcons = contact?.linkIcons || linkIcons || [];
    // const mergedActionIcons = contact?.actionIcons || actionIcons || [];


    // console.log("[ CONTACT-BAR ]", mergedLinkIcons);

    return (
        <HorizontalLayout className={`${styles['contact-bar-layout']}`}>

            {
                (contactLinkIcons.length > 0 && contactLinkIcons === undefined)
                    ? <></>
                    : contactLinkIcons.map((icon: LinkIcon) => {
                        const { iconName, link } = icon;
                        return <IconLink
                            className={`${styles['contact-bar-icon']}`}
                            name={iconName}
                            key={iconName}
                            link={link}
                            size={32}
                        />
                    })
            }


        </HorizontalLayout>
    )
}

export { ContactBar }
